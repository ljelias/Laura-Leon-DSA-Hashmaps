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

main();