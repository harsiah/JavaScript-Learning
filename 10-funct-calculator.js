const add = (a, b) => {
    return a + b;
}


const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const devide = (a, b) => {
    //jika parameter 0 maka tidak bisa dibagi ini kodenya//
    if (b === 0){
        return "tidak bisa membagi dengan nol!";
    }
    return a / b;
}


console.log(add(5, 10));
console.log(subtract(5, 10));
console.log(multiply(5, 10));
console.log(devide(5, 10));