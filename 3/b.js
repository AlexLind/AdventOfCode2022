const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // Split the input file by line

  const rucksackData = data.split("\n");

  //   Make an array of arrays with every three strings.

  const rucksackDataJoined = [];

  rucksackData.forEach((line, index) => {
    if (index % 3 === 0) {
      rucksackDataJoined.push([
        rucksackData[index].split(""),
        rucksackData[index + 1].split(""),
        rucksackData[index + 2].split(""),
      ]);
    }
  });

  let matchingItems = [];

  rucksackDataJoined.forEach((item, index) => {

    const sharedItem = item[0].filter(
      (letter) => item[1].includes(letter) && item[2].includes(letter)
    );
    if (sharedItem) {
      matchingItems.push(sharedItem);
    }
  });

  const matchingItemsUnique = matchingItems.map((matchingItem) => [
    ...new Set(matchingItem),
  ]);

  function removeItemAll(arr, value) {
    let i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }

  matchingItemsUnique.forEach((arr) => removeItemAll(arr, "\r"));

  // Assign priority value to each matching item

  const priorityValues = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52,
  };

  const priorityValueArr = matchingItemsUnique.map(
    (item) => priorityValues[item]
  );

  // Sum up the priority values in the array

  const sum = priorityValueArr.reduce((sum, item) => sum + item);
  console.log(sum);
});
