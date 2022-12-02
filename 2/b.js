const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  strategyGuide = data.split(/\r?\n/).join(" ").split(" ");

  const action = (action, reaction) => {
    switch (reaction) {
      case "Y": // DRAW
        if (action === "A") {
          score += draw + rock;
        } else if (action === "B") {
          score += draw + paper;
        } else {
          score += draw + scissors;
        }
        break;
      case "X": // LOSE
        if (action === "A") {
          score += lose + scissors;
        } else if (action === "B") {
          score += lose + rock;
        } else {
          score += lose + paper;
        }
        break;
      case "Z": // WIN
        if (action === "A") {
          score += win + paper;
        } else if (action === "B") {
          score += win + scissors;
        } else {
          score += win + rock;
        }
        break;
    }
  };

  /*
Y = Paper
X = Rock
Z = Scissors
A = Rock
B = Paper
C = Scissors
*/

  const win = 6;
  const draw = 3;
  const lose = 0;
  const rock = 1;
  const paper = 2;
  const scissors = 3;

  let score = 0;

  for (let i = 0; i < strategyGuide.length; i++) {
    if (i % 2 === 1) {
      switch (strategyGuide[i - 1]) {
        case "A":
          action("A", strategyGuide[i]);
          break;
        case "B":
          action("B", strategyGuide[i]);
          break;
        case "C":
          action("C", strategyGuide[i]);
          break;
      }
    }
  }

  console.log(score);
});
