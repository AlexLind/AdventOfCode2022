const fs = require("fs");

const input = fs.readFileSync("input.txt", { encoding: "utf-8" });

// const input = "bvwbjplbgvbhsrlpgdmjqwftvncz"

for (let i = 13; i < input.length; i++) {
    // console.log(input[i-14])
  const lastThirteenLetters =
    input[i - 1] +
    input[i - 2] +
    input[i - 3] +
    input[i - 4] +
    input[i - 5] +
    input[i - 6] +
    input[i - 7] +
    input[i - 8] +
    input[i - 9] +
    input[i - 10] +
    input[i - 11] +
    input[i - 12] +
    input[i - 13] 

    const lastThirteenLettersReversed = lastThirteenLetters.split('').reverse();
  if (
    !lastThirteenLettersReversed.includes(input[i]) &&
    !checkIfDuplicateExists(lastThirteenLettersReversed)
  ) {
    return console.log(i + 1);
  }
}

function checkIfDuplicateExists(arr) {
  return new Set(arr).size !== arr.length;
}
