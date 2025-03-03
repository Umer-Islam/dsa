// you will be given n, you have to print the first n elements of fibonacci series

const fib = (n) => {
  const initial = [0, 1];
  for (let i = 2; i <= n - 1; i++) {
    initial[i] = initial[i - 1] + initial[i - 2];
  }
  console.log(initial);
  return initial;
};

console.log(fib(8));
