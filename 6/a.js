const fs = require("fs");

const input = fs.readFileSync("input.txt", { encoding: "utf-8" });

for (let i = 3; i < input.length; i++) {
  const lastThreeLetters = input[i - 1] + input[i - 2] + input[i - 3];
  if (
    !lastThreeLetters.includes(input[i]) &&
    !checkIfDuplicateExists(lastThreeLetters.split(""))
  ) {
    return console.log(i + 1);
  }
}

function checkIfDuplicateExists(arr) {
  return new Set(arr).size !== arr.length;
}
