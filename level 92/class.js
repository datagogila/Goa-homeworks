class Person {
    constructor(name, age, city) {
      this.name = name;
      this.age = age;
      this.city = city;
    }
  
    Person() {
      console.log(`მე მქვია ${this.name}, ვარ ${this.age} წლის და ვცხოვრობ ${this.city}-ში.`);
    }
  }
  
  const p1 = new Person("დათა", 10, "თბილისი");
  
  
  p1.Person();
  


class Operative {
    constructor(name, rank) {
      this.name = name;
      this.rank = rank;
    }
  
    getInfo() {
      return `Name: ${this.name}, Rank: ${this.rank}`;
    }
  
    static compareRanks(op1, op2) {
      return op1.rank === op2.rank
         `${op1.name} and ${op2.name} have the same rank`
         (op1.rank > op2.rank `${op1.name} has a higher rank``${op2.name} has a higher rank`);
    }
  }
  
  class EliteOperative extends Operative {
    constructor(name, rank, specialty) {
      super(name, rank);
      this.specialty = specialty;
    }
  
    getInfo() {
      return `Name: ${this.name}, Rank: ${this.rank}, Specialty: ${this.specialty}`;
    }
  }
  
  const op1 = new Operative("John", 3);
  const op2 = new EliteOperative("Sarah", 5, "Sniper");
  const op3 = new EliteOperative("Alex", 3, "Pilot");
  
  console.log(op1.getInfo()); 
  console.log(op2.getInfo());  

  