function likes  (names) {
    let count = names.length;

    if (count === 0) {
        return "no one likes this";
    } else if (count === 1) {
        return `${names[0]} likes this`;
    } else if (count === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (count === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
    }
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


const check = (a, x) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return true;
        }
    }
    return false;
};


const simpleMultiplication = (num) => {
    if (num % 2 === 0) {
        return num * 8; 
    } else {
        return num * 9; 
    }
};




