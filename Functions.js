const hello = () => {
    console.log("Hey how are you");
    return "Hello";
}

function onePlusAvg(a, b) {
    return 1 + (a + b) / 2;
}

const sum = (p, q) => {
    return p + q;
}

let a = 1;
let b = 2;
let c = 3;

let v = hello();
console.log(v);
console.log("Average of a and b is ", onePlusAvg(a, b));
console.log("Average of b and c is ", onePlusAvg(b, c));
console.log("Average of a and c is ", onePlusAvg(a, c));
console.log(sum(9, 7));