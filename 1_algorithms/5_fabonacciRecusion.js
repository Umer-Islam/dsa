const recursive_fibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return recursive_fibonacci(n - 1) + recursive_fibonacci(n - 2);
};
console.log(recursive_fibonacci(0));
console.log(recursive_fibonacci(1));
console.log(recursive_fibonacci(6));
console.log(recursive_fibonacci(8));

// O(2^n), time complexity is exponential