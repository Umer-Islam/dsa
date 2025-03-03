// given a number lets say n find the factorial of that number

const factorial = (n) => {
  let initial = 1;
  for (let i = 2; i <= n; i++) {
    initial = initial * i;
  }
  return initial;
};
// since there is only 1 for loop it is O(n) or linear
console.log(factorial(5));
