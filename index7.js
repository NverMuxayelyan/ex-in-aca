function generateFibonacci(max) {
  if (max < 1) return [];

  const fibonacciSequence = [0, 1];

  while (true) {
    const nextValue =
      fibonacciSequence[fibonacciSequence.length - 1] +
      fibonacciSequence[fibonacciSequence.length - 2];

    if (nextValue > max) break;

    fibonacciSequence.push(nextValue);
  }

  return fibonacciSequence;
}

console.log(generateFibonacci(15));
