// given a number n check whether its power of 2 or not, return boolean
//  we can prove this by taking an integer x, where n == 2^x
//example if n is 1 , then 1 ==2^0
// if n = 2 then 2 = 2^1
//if n = 4 then 4 = 2^2
const isPowerOf2 = (n) => {
  for (let i = 0; i <= n / 2; i++) {
    // console.log(Math.pow(2, i));
    if (n === 2 ** i) {
      return true;
    }
  }
  return false;
};
console.log(isPowerOf2(1));
console.log(isPowerOf2(2));
console.log(isPowerOf2(5));

