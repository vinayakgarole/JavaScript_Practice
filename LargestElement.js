const prompt = require('prompt-sync')();
const arr = [];
const size = prompt("Enter size: ");

for (let i = 0; i < size; i++) {
    const element = prompt("Enter Element: ");
    arr.push(element);
}

function findLargestElement(array) {
    let largestElement = array[0];

    for (let i = 0 ; i < arr.length; i++) {

        if (array[i] > largestElement) {
            largestElement = array[i];
        }
    }
    return largestElement;
}
const largestElement = findLargestElement(arr);
console.log("Largest element found: " + largestElement)