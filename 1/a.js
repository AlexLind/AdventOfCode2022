const fs = require("fs");

let elfCaloriesArr;

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //   console.log(data.split(/\r?\n/).join(' ').split('  ').map((item) => item.split(' ')));
  elfCaloriesArr = data
    .split(/\r?\n/)
    .join(" ")
    .split("  ")
    .map((item) => item.split(" "));
  //   console.log(elfCaloriesArr);
  //   const elfCalorieCount = elfCaloriesArr.map((item) => {console.log(item)});
  console.log(
    elfCaloriesArr.forEach((item) =>
      item.map((str) => {
        return Number(str);
      })
    )
  );
});
