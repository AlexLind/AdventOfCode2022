const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // Split the input file by line
  const rucksackData = data.split(/\r?\n/);

  // For each line, Break string into two arrays of single letters for compartment 1 and 2.
  let compartment1 = [];
  let compartment2 = [];

  rucksackData.forEach((line) => {
    compartment1.push(line.substring(0, line.length / 2).split(""));
    compartment2.push(line.substring(line.length / 2, line.length).split(""));
  });

  // Loop over compartment 1 and 2 and add matching items to a new array:

  let matchingItems = [];

  for (let i = 0; i < compartment1.length; i++) {
    const sharedItem = compartment1[i].filter((item) =>
      compartment2[i].includes(item)
    );
    if (sharedItem) {
      matchingItems.push(sharedItem);
    }
  }

  // Filter out duplicates

  const matchingItemsUnique = matchingItems.map((matchingItem) => [
    ...new Set(matchingItem),
  ]);

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
