function sortArrayAscending(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
let myArr = [5, 7, 1, 9, 3, 6, 2];
let sortedArr = sortArrayAscending(myArr);
console.log(sortedArr);