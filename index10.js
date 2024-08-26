function sortByProperty(arr, age) {
  return arr.sort((a, b) => {
    if (a[age] < b[age]) {
      return -1;
    }
    if (a[age] > b[age]) {
      return 1;
    }
    return 0;
  });
}

console.log(
  sortByProperty(
    [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 20 },
    ],
    "age"
  )
);
