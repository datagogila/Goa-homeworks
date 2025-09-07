const baseIngredients = ['water', 'herb', 'crystal'];

const clone = [...baseIngredients];

const withFeather = ['phoenix feather', ...baseIngredients];

const enhancedPotion = ['phoenix feather', ...baseIngredients, ...['moon dust', 'sun ray']];

console.log(enhancedPotion);



const dna = 'A|T|G|C|A|G';

const dnaArr = [...dna.split('|')]; 

const dnaWithX = dnaArr.flatMap((item, i) => 
  i < dnaArr.length - 1 ? [item, 'X'] : [item]
);

console.log(dnaWithX);



const baseStats = { defense: 40, durability: 80 };
const enchantment = { durability: 100, magicResist: 25 };

const finalStats = { 
  ...baseStats, 
  ...enchantment, 
  weight: 10
};

console.log(finalStats);
 


const thoughts = ['idea1', 'idea2', 'idea3', 'idea4'];

const [first, second, ...remainingThoughts] = thoughts;

console.log(first);            
console.log(second);           
console.log(remainingThoughts); 

const base = ['core', 'shell'];

const withReactor = [...base, 'reactor'];

console.log(withReactor);


const base = ['core', 'shell'];
const withReactor = [...base, 'reactor'];

const merged = [...base, ...withReactor];

console.log(merged);

