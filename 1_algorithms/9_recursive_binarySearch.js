//  do binary search on sorted array, return -1 if not found

const binarySearch = (array, target) => {
  return search(array, target, 0, array.length - 1);
};

const search = (array, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let mid = Math.floor((leftIndex + rightIndex) / 2);
  if (target === array[mid]) {
    return mid;
  }
  if (target < array[mid]) {
    return search(array, target, leftIndex, mid - 1);
  } else {
    return search(array, target, mid + 1, rightIndex);
  }
};
console.log(binarySearch([1, 2, 3, 4, 5], 3));

console.log(binarySearch([1, 2, 3, 4, 5], 5));

console.log(binarySearch([1, 2, 3, 4, 5], 25));
//  time complexity is O(log n)
