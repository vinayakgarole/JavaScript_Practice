let num = 10;
var isPrimeNumber = true;

for (let i = 2; i < num; i++) {

    if (num % i == 0) {
        isPrimeNumber = false;
    }
}

if (isPrimeNumber == true) {
    console.log('${num} is a prime number');
} else {
    console.log('${num} is not prime number');
}