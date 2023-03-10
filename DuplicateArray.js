function findDuplicateElements(inputNumArray) {
    console.log("Element Array");

    for (let i = 0; i < inputNumArray.length; i++) {
        console.log(inputNumArray[i]);
    }
    let duplicateElementsArray = [];

    for (let i = 0; i < inputNumArray.length; i++) {

        for (let j = i + 1; j < inputNumArray.length; j++) {

            if (inputNumArray[i] == inputNumArray[j]) {

                if (!duplicateElementsArray.includes(inputNumArray[i])) {
                    duplicateElementsArray.push(inputNumArray[i]);
                }
            }
        }
    }
    return duplicateElementsArray;
}

let inputNumArray = [2, 1, 7, 8, 6, 7, 1, 9, 3, 2];
let duplicateElements = findDuplicateElements(inputNumArray);
console.log("Duplicate Elements Array: " , duplicateElements);
