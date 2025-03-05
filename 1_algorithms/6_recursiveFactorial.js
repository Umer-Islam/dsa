// find factorial of a given number n using recusion

const factorialRecusion = (n) => {
  if (n == 0) {
    return 1;
  }
  if (n < 0) {
    return "only positive numbers are allowed";
  }
  return n * factorialRecusion(n - 1);
};
console.log(factorialRecusion(2));
console.log(factorialRecusion(3));
console.log(factorialRecusion(-4));
console.log(factorialRecusion(5));


// time complexity if O(n)