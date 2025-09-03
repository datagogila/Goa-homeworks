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
      super(type, intensity);
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
  
  
  