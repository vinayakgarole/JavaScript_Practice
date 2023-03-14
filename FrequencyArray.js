const prompt = require('prompt-sync')();
const arr = [];
const size = prompt("Enter Elements size: ");

for (let i = 0; i < size; i++) {
    const element = prompt("Enter Element: ")
    arr.push(element);
}

function findFrequencyElement(array) {
    let maxFreq = 0;
    let freqElement;

    for (let i = 0; i < arr.length; i++) {
        let x = array[i];
        let count = 0;

        if (x == -1) continue;

        for (let j = 0; j < array.length; j++) {

            if (array[j] == x) {
                count++;
                array[j] = -1;
            }
        }

        if (count > maxFreq) {
            maxFreq = count;
            freqElement = x;
        }
    }
    return {element: freqElement, frequency: maxFreq}
}
const { element, frequency } = findFrequencyElement(arr);
console.log("Frequency of " + element + " is " + frequency);