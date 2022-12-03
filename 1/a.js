const fs = require("fs");

let elfCaloriesArr;

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  elfCaloriesArr = data
    .split(/\r?\n/)
    .join(" ")
    .split("  ")
    .map((item) => item.split(" "));

  const elfCalorieCount = elfCaloriesArr.map((item) =>
    item.map((str) => {
      return Number(str);
    })
  );

  const topThreeElfs = []
  const elfCalorieCountSum = elfCalorieCount.map((item) => item.reduce((acc, curr) => acc + curr));
  const max1 = Math.max(...elfCalorieCountSum)
  console.log(max1)
  topThreeElfs.push(max1);
  index1 = elfCalorieCountSum.indexOf(max1);
  elfCalorieCountSum.splice(index1,1)
  const max2 = Math.max(...elfCalorieCountSum)
  topThreeElfs.push(max2);
  index2 = elfCalorieCountSum.indexOf(max2);
  elfCalorieCountSum.splice(index2,2)
  const max3 = Math.max(...elfCalorieCountSum)
  topThreeElfs.push(max3);
  index3 = elfCalorieCountSum.indexOf(max3);
  elfCalorieCountSum.splice(index3,3)
  console.log(topThreeElfs.reduce((acc, curr) => acc + curr));
});
