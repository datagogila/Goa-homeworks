function collectArgs(...args) {
    return args;
  }
  
  console.log(collectArgs(1, "a", true));


  function sumAll(...nums) {
    return nums.reduce((sum, n) => sum + n, 0);
  }
  console.log(sumAll(1, 2, 3, 4)); 



  function excludeFirst(first, ...rest) {
    return rest;
  }
  
  console.log(excludeFirst(10, 20, 30, 40));




  function logExceptLast(...items) {
    items.slice(0, -1).forEach(i => console.log(i));
  }
  
  


 
  const arr = [1, 2, 3, 4, 5];
  const [first, second, ...rest] = arr;
  
  console.log(first);  
  console.log(second); 
  console.log(rest);   
 


  const user = { name: "Davit", age: 25, role: "admin", active: true };
  
  const { name, age, ...rest } = user;
  
  console.log(name); 
  console.log(age);  
  console.log(rest); 



  function filterOut(target, ...values) {
    return values.filter(v => v !== target);
  }
  
  console.log(filterOut(2, 1, 2, 3, 2, 4)); 



  class Logger {
    constructor(prefix, ...messages) {
      this.prefix = prefix;
      this.messages = messages;
    }
  


    log() {
      this.messages.forEach(msg => console.log(this.prefix, msg));
    }
  }
  
  const logger = new Logger("[INFO]", "Start", "Running", "Done");
  logger.log();



  const data = [1, [2, 3, 4], 5];
  const [one, [two, ...restNested], five] = data;
  
  console.log(one);      
  console.log(two);        
  console.log(restNested); 
  console.log(five);      
 


  function flatten(...args) {
    return args.reduce((acc, val) => 
      Array.isArray(val) ? acc.concat(flatten(...val)) : acc.concat(val)
    , []);
  }
  
  console.log(flatten(1, [2, [3, 4]], 5));