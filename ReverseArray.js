const prompt = require('prompt-sync')();
const originalArray = [];
const length = prompt('Enter the length of the array: ');

for (let i = 0; i < length; i++) {
    const element = prompt('Enter Element: ');
    originalArray.push(element);
}

function reverseArray(array) {
    const reversedArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

const reversedArray = reverseArray(originalArray);

console.log("Original Array: " + originalArray);
console.log("Reversed Array: " + reversedArray);
