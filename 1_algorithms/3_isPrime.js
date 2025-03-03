// given a positive integer n, find out if it is prime or not

const is_prime = (n) => {
  let isPrime = false;
  if (n < 2) {
    return isPrime;
  }
  // i <= Math.sqrt(n) is better it would change the time complexity to O(sqrt(n)) also known as sub-linear
  for (let i = 2; i < n; i++) {
    if (n % i !== 0) {
      isPrime = true;
    }
    return isPrime;
  }
};
console.log(is_prime(1));
console.log(is_prime(5));
console.log(is_prime(4));
