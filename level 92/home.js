class Specimen {
    constructor(id, type) {
      this.id = id;
      this.type = type;
    }
  
    getLabel() {
      return `Specimen ID: ${this.id}, Type: ${this.type}`;
    }
  }
  
  class MutantSpecimen extends Specimen {
    constructor(id, type, mutationLevel) {
      super(id, type); 
      this.mutationLevel = mutationLevel;
    }
  
    getLabel() {
      return `Specimen ID: ${this.id}, Type: ${this.type}, Mutation Level: ${this.mutationLevel}`;
    }
  
    static mostMutated(arr) {
      return arr.reduce((max, specimen) => 
        specimen.mutationLevel > max.mutationLevel ? specimen : max
      );
    }
  }
  

  let s1 = new MutantSpecimen("S-101", "Blood", 12);
  let s2 = new MutantSpecimen("S-102", "Tissue", 20);
  let s3 = new MutantSpecimen("S-103", "DNA", 8);
  
  console.log(s1.getLabel());
  
  
  let mostMutated = MutantSpecimen.mostMutated([s1, s2, s3]);
  console.log("Most mutated:", mostMutated.getLabel())



  constructor(model, speed, batteryLife) {
    (model, speed); 
    this.batteryLife = batteryLife;
  }

  getInfo() {
    return `Model: ${this.model}, Speed: ${this.speed} km/h, Battery Life: ${this.batteryLife} hrs`;
  }

  static compareSpeed(v1, v2) {
    return v1.speed > v2.speed ? v1 : v2;
  }
}

let car1 = new Vehicle("Toyota", 180);
let car2 = new ElectricVehicle("Tesla Model 3", 200, 12);

console.log(car1.getInfo());

console.log(car2.getInfo());

let faster = ElectricVehicle.compareSpeed(car1, car2);
console.log("Faster vehicle:", faster.getInfo());


class Vehicle {
    constructor(model, speed) {
      this.model = model;
      this.speed = speed;
    }
  
    getInfo() {
      return `Model: ${this.model}, Speed: ${this.speed} km/h`;
    }
  }
  
  class ElectricVehicle extends Vehicle {
    constructor(model, speed, batteryLife) {
      super(model, speed);
      this.batteryLife = batteryLife;
    }
  
    getInfo() {
      return `Model: ${this.model}, Speed: ${this.speed} km/h, Battery Life: ${this.batteryLife} hrs`;
    }
  
    static compareSpeed(v1, v2) {
      if (v1.speed > v2.speed) return v1;
      if (v2.speed > v1.speed) return v2;
      return "Equal speed";
    }
  }

  let car1 = new Vehicle("Toyota", 180);
  let car2 = new ElectricVehicle("Tesla", 200, 15);
  
  console.log(ElectricVehicle.compareSpeed(car1, car2).getInfo());
  


  class Sequence {
    constructor(code, length) {
      this.code = code;
      this.length = length;
    }
  
    getSummary() {
      return `Code: ${this.code}, Length: ${this.length}`;
    }
  }
  
  class MutatedSequence extends Sequence {
    constructor(code, length, mutationType) {
      super(code, length); 
      this.mutationType = mutationType;
    }
  
    getSummary() {
      return `Code: ${this.code}, Length: ${this.length}, Mutation: ${this.mutationType}`;
    }
  
    static filterByLength(arr, min) {
      return arr.filter(seq => seq.length > min);
    }
  }
  

  let seq1 = new MutatedSequence("ATCG", 4, "Substitution");
  let seq2 = new MutatedSequence("GATTACA", 7, "Insertion");
  let seq3 = new MutatedSequence("CGT", 3, "Deletion");
  
  console.log(seq1.getSummary());
  
  
  let longSeqs = MutatedSequence.filterByLength([seq1, seq2, seq3], 4);
  console.log("Longer sequences:");
  longSeqs.forEach(s => console.log(s.getSummary()));
  


class Satellite {
    constructor(id, orbitType) {
      this.id = id;
      this.orbitType = orbitType;
    }
  
    getDetails() {
      return `ID: ${this.id}, Orbit: ${this.orbitType}`;
    }
  }
  
  class MilitarySatellite extends Satellite {
    constructor(id, orbitType, encryptionLevel) {
      super(id, orbitType); 
      this.encryptionLevel = encryptionLevel;
    }
  
    getDetails() {
      return `ID: ${this.id}, Orbit: ${this.orbitType}, Encryption: ${this.encryptionLevel}`;
    }
  
    static countByOrbit(arr, type) {
      return arr.filter(sat => sat.orbitType === type).length;
    }
  }
  
  let s1 = new Satellite("SAT-1", "LEO");
  let m1 = new MilitarySatellite("MSAT-1", "GEO", "HIGH");
  let m2 = new MilitarySatellite("MSAT-2", "LEO", "LOW");
  
  console.log(m1.getDetails()); 
  console.log(MilitarySatellite.countByOrbit([s1, m1, m2], "LEO")); 



  class Piece {
    constructor(shape, color) {
      this.shape = shape;
      this.color = color;
    }
  
    getDetails() {
      return `Shape: ${this.shape}, Color: ${this.color}`;
    }
  }
  
  class RarePiece extends Piece {
    constructor(shape, color, rarityScore) {
      super(shape, color);
      this.rarityScore = rarityScore;
    }
  
    getDetails() {
      return `Shape: ${this.shape}, Color: ${this.color}, Rarity: ${this.rarityScore}`;
    }
  
    static rarestPiece(arr) {
      return arr.reduce((max, piece) => 
        piece.rarityScore > max.rarityScore ? piece : max
      );
    }
  }
  
  let p1 = new RarePiece("Square", "Red", 10);
  let p2 = new RarePiece("Circle", "Blue", 25);
  let p3 = new RarePiece("Triangle", "Green", 15);
  
  console.log(RarePiece.rarestPiece([p1, p2, p3]).getDetails()); 



  class Vision {
    constructor(type, intensity) {
      this.type = type;
      this.intensity = intensity;
    }
  
    getDetails() {
      return `Type: ${this.type}, Intensity: ${this.intensity}`;
    }
  }
  
  class FutureVision extends Vision {
    constructor(type, intensity, timestamp) {
      (type, intensity);
      this.timestamp = timestamp;
    }
  
    getDetails() {
      return `Type: ${this.type}, Intensity: ${this.intensity}, Time: ${this.timestamp}`;
    }
  
    static filterByIntensity(arr, threshold) {
      return arr.filter(v => v.intensity >= threshold);
    }
  }
  
  
  let v1 = new FutureVision("Dream", 5, "2030-01-01");
  let v2 = new FutureVision("Prophecy", 9, "2040-05-20");
  let v3 = new FutureVision("Vision", 3, "2029-12-31");
  
  console.log(FutureVision.filterByIntensity([v1, v2, v3], 5));
  


  class Vehicle {
    constructor(model, speed) {
      this.model = model;
      this.speed = speed;
    }
  
    getInfo() {
      return `Model: ${this.model}, Speed: ${this.speed} km/h`;
    }
  }
  
  class ElectricVehicle extends Vehicle {
 
  
  