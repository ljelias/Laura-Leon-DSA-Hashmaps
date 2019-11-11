class SeparateChainHashMap {
  constructor(initialCapacity=8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  }

  get(key) {
    const index = this._findSlot(key);
    if (this._hashTable[index] === undefined) {
      throw new Error('Key error');
    }
    return this._hashTable[index].value;
  }

  set(key, value){
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > SeparateChainHashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * SeparateChainHashMap.SIZE_RATIO);
    }
    //Find the slot where this key should be in
    const index = this._findSlot(key);

    if(!this._hashTable[index]){
      this.length++;
      this._hashTable[index] = {
        key,
        value,
        DELETED: false,
        next: null
      }; 
    }
    else {
      let currObj = this._hashTable[index];
      while (currObj.next != null) {
        currObj = currObj.next;
      }
      currObj.next = {
        key,
        value,
        DELETED: false,
        next: null
      };
    }
  }

  delete(key, value) {
    const index = this._findSlot(key);
    let slot = this._hashTable[index];
    if (slot === undefined) {
      throw new Error('Key error');
    }
    if (slot.next == null) {
      slot.DELETED = true;
      this.length--;
      this._deleted++;
    }
    else {
      let previous = slot;
      if (slot.value === value) { //first value
        this._hashTable[index] = slot.next;
        return;
      }

      while (slot.next != null) { //all other values except last
        if (slot.next.value === value) {
          slot.next = slot.next.next;
          return;
        }
        previous = slot;
        slot = slot.next;
      }
      if (slot.value === value) { //last value
        previous.next = slot.next;
      }
    }
    throw new Error('Non-existent value in chain');
  }

  _findSlot(key) {
    const hash = SeparateChainHashMap._hashString(key);
    const start = hash % this._capacity;
    return start % this._capacity;
    // const start = 0;


    // for (let i=start; i<start + this._capacity; i++) {
    //   const index = i % this._capacity;
    //   const slot = this._hashTable[index];
    //   if (slot === undefined || (slot.key === key && !slot.DELETED)) {
    //     return index;
    //   }
    // }
  }

  _resize(size) {
    const oldSlots = this._hashTable;
    this._capacity = size;
    // Reset the length - it will get rebuilt as you add the items back
    this.length = 0;
    this._deleted = 0;
    this._hashTable = [];

    for (const slot of oldSlots) {
      if (slot !== undefined && !slot.DELETED) {
        this.set(slot.key, slot.value);
      }
    }
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      //Bitwise left shift with 5 0s - this would be similar to
      //hash*31, 31 being the decent prime number
      //but bit shifting is a faster way to do this
      //tradeoff is understandability
      hash = (hash << 5) + hash + string.charCodeAt(i);
      //converting hash to a 32 bit integer
      hash = hash & hash;
    }
    //making sure hash is unsigned - meaning non-negtive number.\
    return hash >>> 0;
  }
}

SeparateChainHashMap.MAX_LOAD_RATIO = 0.5;
SeparateChainHashMap.SIZE_RATIO = 3;

module.exports = SeparateChainHashMap;