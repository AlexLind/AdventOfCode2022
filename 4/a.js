const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // Split the input file by line
  const pairs = data.trim().split(/\r?\n/);
  // console.log(pairs)

  // Parse the array of pairs to an array of arrays of arrays: [[[94, 97],[31,95]], [[[7, 8],[11,95]]]

  const lineArr = pairs.map((pair) => pair.split(","));
  // console.log(lineArr[0][0].split("-"))
  const lineArrPairs = lineArr.map((line) => line.map((arr) => arr.split("-")));
  // console.log(lineArrPairs[0][0][1])

  // create a string representation of the range i.e. : [[['(94)(95)(96)(97)', '[1][2][3]']]

  const dataInput = lineArrPairs[118]
  const testFunc = (input) => {
    input.map((data) => {
      let numberRange = ''
      console.log('in here ',data, String(data[0].length), String(data[1].length))
      for (let i = data[0]; i <= data[1]; i++) {
        console.log('iterator is ',i)
      if (String(i).length === 1) {
        console.log(i, ' single digit')
        numberRange += String(`[${i}]`)
        continue
      } else {
        console.log(i, ' double digit')
        numberRange += String(`(${i})`);
      }
      // continue
    }
    console.log('number range: ', numberRange);
    return numberRange;
  })

    
  }
  testFunc(dataInput)


  console.log(lineArrPairs[118])

  const strings = lineArrPairs.map((line) =>
      line.map((num) => {
        let numberRange = "";
        for (let i = num[0]; i <= num[1]; i++) {
          if (String(i).length === 1) {
            // console.log(i, ' single digit')
            numberRange += String(`[${i}]`)
          } else {
            // console.log(i, ' double digit')
            numberRange += String(`(${i})`);
          }
          // continue
        }
        // console.log(numberRange);
        return numberRange;
      })
    )

  // Filter the array based on whether the second string includes the first 

  const filteredArr = strings.filter((pair) => pair[1].includes(pair[0]) || pair[0].includes(pair[1]));
  // console.log(filteredArr)
  // Get the length of the filtered array
  const length = filteredArr.length
  console.log(length)    
    
});
