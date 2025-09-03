const nebulaStock = ['stardust', 'quantum core', 'plasma orb'];
const asteroidStock = ['iron shard', 'dark crystal'];


const nebulaBackup = [...nebulaStock];


const nebulaPlus = [...nebulaStock, 'gravity lens'];


const celestialDrops = [...'meteor|comet|nova'.split('|')];


const fullInventory = [...nebulaStock, ...asteroidStock, ...celestialDrops];

console.log(nebulaBackup);     
console.log(nebulaPlus);      
console.log(celestialDrops);  
console.log(fullInventory);  



// Spread Operator (...) – გამოიყენება array-ის ან object-ის "გაშლისთვის"
// ანუ არსებული ელემენტების "გადატანა" ახალ array-ში, object-ში ან ფუნქციის არგუმენტებში.

// 1. Copy nebulaStock – spread-ის მეშვეობით ვაკეთებთ ზუსტ ასლს
  



// 2. Add new item without modifying nebulaStock
  

// აქ spread "გაშლის" ძველ ელემენტებს და ბოლოს ვამატებთ ახალს


// 3. Disband string into items – split() ქმნის array-ს, spread "გაშლის" მას ელემენტებად




// 4. Combine arrays – spread-ს ვიყენებთ რომ რამდენიმე array-ის ყველა ელემენტი ერთში ჩავყაროთ



