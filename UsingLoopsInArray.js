let num = [3, 54, 1, 2, 4];

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

// forEach Loop
num.forEach((element) => {
    console.log(element * element);
});

// Array.from
let name = "Vinayak";
let arr = Array.from(name);
console.log(arr);

// for...of
for (let i of num) {
    console.log(i);
}

// for...in
for (let i in num) {
    console.log(i);
}