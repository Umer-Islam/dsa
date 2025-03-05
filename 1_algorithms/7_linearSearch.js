// given an array return the index of the array, if not found return -1

const findIndex = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};
console.log(findIndex([1, 2, 3], 3)); // 2
console.log(findIndex([1, 2, 3], 2)); //1
console.log(findIndex([1, 2, 3], 6)); // -1
console.log(findIndex([1, 2, 3, -4, 5, 4, 5, 23, 4, 6, 45, 45], -4)); // 3

// time complexity is O(n)
