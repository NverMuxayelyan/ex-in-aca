function IsPrime(Number) {
  if (Number % 2 !== 0) {
    return true;
  } else if (Number % 2 === 0) {
    return false;
  }
}
console.log(IsPrime(2));
