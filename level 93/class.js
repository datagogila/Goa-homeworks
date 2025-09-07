class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
      this.isAvailable = true; 
    }
  
    borrow() {
      if (this.isAvailable) {
        this.isAvailable = false;
        return `You borrowed "${this.title}"`;
      } else {
        return `Sorry, "${this.title}" is not available.`;
      }
    }
  }

  const book1 = new Book("Don Quixote", "Miguel de Cervantes");
  
  console.log(book1.borrow()); 
  console.log(book1.borrow()); 
  

  let map = new Map([["k1","მგელი"],["k2", "მელა"],["k3", "კურდღელი"],["k4", "ლომი"],["k5", "ტურა"]]);
  
  console.log(map);
  console.log(map.size);
  console.log(map.get("k1"));
  console.log(map.get("k2"));
  map.delete("k1");
  console.log(map.has("k1"));  
  console.log(map.has("k2")); 
  console.log(map.entries());
  
  for (let k of map.entries()) {
    console.log("key:", k[1], "value:", k[2]);
  }
  

  let set = new Set(["ამერიკა", "რუსეთი", "საქართველო", 1, 2, 3, 4, 5, 5, 5, 5, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, ]);

  console.log(set);
  