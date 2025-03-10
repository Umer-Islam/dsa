// very similar to arrays but do not allow the duplicate values of same datatype
const set = new Set([1, 2, 3, 4, "4", 5, 6, 7, 7]);
console.log(set.has(3)); // check if set contains a value O(n)
set.delete(1); // delete a value O(1)
console.log("size of the set is: " + set.size);
for (const item of set) {
  console.log(item);
}
