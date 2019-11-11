let HashMap = require('./HashMap');



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

WhatDoesThisDo();