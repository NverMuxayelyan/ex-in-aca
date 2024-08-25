function countVowels(str) {
  const lowerCaseStr = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  for (let char of lowerCaseStr) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}
const result = countVowels("Hello, World!");
console.log(result);
