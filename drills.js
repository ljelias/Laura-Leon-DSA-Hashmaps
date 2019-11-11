let HashMap = require('./HashMap');
let SeparateChainHashMap = require('./SeparateChainHashMap');



function main() {
  let lore = new HashMap;
  lore.set('Hobbit', 'Bilbo');
  lore.set('Hobbit', 'Frodo');
  lore.set('Wizard', 'Gandalf');
  lore.set('Human', 'Aragon');
  lore.set('Elf', 'Legolas');
  lore.set('Maiar', 'The Necromancer');
  lore.set('Maiar', 'Sauron');
  lore.set('RingBearer', 'Gollum');
  lore.set('LadyOfLight', 'Galadriel');
  lore.set('HalfElven', 'Arwen');
  lore.set('Ent', 'Treebeard');
  console.log(lore);
  console.log(lore.get('Maiar'));
  console.log(lore.get('Hobbit'));

}

// main();

const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1,10);
  map1.set(str2,20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
}

// WhatDoesThisDo();


function question4(string) {
  let stringDecode = new HashMap;
  for (let i =0; i< string.length; i++) {
    stringDecode.set(string[i], string[i]);
  }
  console.log(stringDecode);

}

// question4('google all that you think can think of');

function question5(string) {
  let palindromeFinder = new HashMap;

  for (let i = 0; i < string.length; i++) {
    try {
      let keySearch = palindromeFinder.get(string[i])
      palindromeFinder.delete(keySearch);
    }
    catch {
      palindromeFinder.set(string[i], string[i]);
    }
  }  
    let evenOrOdd = string.length % 2; // if it's 0 it's even, if it's 1 it's odd
    if (evenOrOdd) {
      //need palindrome finder to have length of 1
      if (palindromeFinder.length > 1) {
        console.log('could not be a palindrome');
        return false;
      }
      else {
        console.log('could be a palindrome');
        return true;
      }
    }
    else {
      if (palindromeFinder.length === 0) {
        console.log('could be a palindrome');
        return true;
      }
      else {
        console.log('could not be a palindrome');
        return false;
      }
    }
  }

question5('tops tot spot');
question5('loots tot stool');
question5('aspool loopsy');

function question6(arrayOfWords) {
  let testHash = new HashMap;
  for (let i =0; i < arrayOfWords.length; i++ ){
    let currWord = arrayOfWords[i];
    let sortedWord = currWord.split('').sort().join('');


    let value = [currWord];
    try {
      let oldValue = testHash.get(sortedWord);
      oldValue.push(currWord);
    }
    catch {
      //there is no key yet
      testHash.set(sortedWord, value)
    }
  }
  let answers = [];
  for (let obj of testHash._hashTable) {
    if (obj) {
      answers.push(obj.value);
    }
  }
  console.log(answers);
}


// question6(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']);


function question7() {
  let testChainHash = new SeparateChainHashMap;
  testChainHash.set('a', 'first value');
  testChainHash.set('b','second value');
  testChainHash.set('c','third value');
  testChainHash.set('b', 'fourth value');
  // testChainHash.set('b', 'fifth value');
  console.log(testChainHash);
  testChainHash.delete('b', 'fourth value');
  console.log('deleted');
  console.log(testChainHash);
}
question7();