// given an array sort it in either assending or descending order
// [6,3,4,1,7]

const descendingSort = (array) => {
  let swap;
  do {
    swap = false;
    for (let index = 0; index < array.length - 1; index++) {
      if (array[index] < array[index + 1]) {
        let temp = array[index + 1];
        array[index + 1] = array[index];
        array[index] = temp;
        swap = true;
      }
    }
    console.log(array);
  } while (swap);
  //   return array;
};

// console.log(Descendingsort([6, 3, 4, 1, 7])); // [1,3,4,6,7]
const assendingSort = (array) => {
  let swap;
  do {
    swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swap = true;
      }
      console.log(array);
    }
  } while (swap);
};

console.log(assendingSort([6, 3, 4, 1, 7]));

// time compelxity is O(n^2)
