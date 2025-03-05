// given an array return  the index of a given target, else return -1

const binarySearch = (array, target) => {
  //assuming that array is sorted
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  while (leftIndex <= rightIndex) {
    let mid = Math.floor((leftIndex + rightIndex) / 2);
    // console.log(`${mid} is the middle value`);
    if (target === array[mid]) {
      return mid;
    }
    if (target < array[mid]) {
      rightIndex = mid - 1;
    } else {
      leftIndex = mid + 1;
    }
    // console.log(`---`);
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 0
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 9)); // -1

console.log(binarySearch([], 4)); // -1

// time complexity is O(log ng)
