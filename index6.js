function GetAvarge(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let avarge = sum / arr.length;
  return avarge;
}
console.log(GetAvarge([10, 20, 30, 40, 50]));
