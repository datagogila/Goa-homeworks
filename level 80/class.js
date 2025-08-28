const invert = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(-arr[i]);
    }
    return result;
};

const getAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return Math.floor(sum / arr.length);
};

const digitize = (num) => {
    let arr = [];
    if (num === 0) return [0];
    
    while (num > 0) {
        arr.push(num % 10);     
        num = Math.floor(num / 10); 
    }
    return arr;
};


console.log(digitize(35231)); 
console.log(digitize(0));     
