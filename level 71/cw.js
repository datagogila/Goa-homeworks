function countSheeps(sheep) {
    let count = 0;
  
    for (let i = 0; i < sheep.length; i++) {
      if (sheep[i] === true) {
        count++;
      }
    }
  
    return count;
  }


  function findAverage(array) {
    if (array.length === 0) return 0; 
  
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  
    return sum / array.length; 
  }

  function oddOrEven(array) {
    if (array.length === 0) array = [0];
  
    const sum = array.reduce((a, b) => a + b, 0);
  
    return sum % 2 === 0 ? "even" : "odd";
  }


  function sumMix(arr) {
    return arr.reduce((sum, value) => sum + Number(value), 0);
  }


  function arrayPlusArray(arr1, arr2) {
    const sum1 = arr1.reduce((a, b) => a + b, 0);
    const sum2 = arr2.reduce((a, b) => a + b, 0);
    return sum1 + sum2;
  }
  