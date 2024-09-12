function Mission1(arr) {
  let arrayOfEvenNumbers = [];
  arr.forEach((element) => {
    if (element % 2 === 0) {
      arrayOfEvenNumbers.push(element);
    }
  });

  return arrayOfEvenNumbers;
}

// console.log(Mission1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// let string = "aa this bb cc that abcd";
function Mission2(str) {
  let newString = str
    .split(" ")
    .filter((x) => x.length === 4)
    .join(" ");
  return newString.split(" ").length;
}

// console.log(Mission2(string));

function Mission3(nestedArray) {
  const merge3 = nestedArray.flat(1);
  return merge3;
}
// console.log(
//   Mission3([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );


function Mission4(arr) {
  if (arr.length < 2) {
    return 0;
  }
  isUp = isAscending(arr);
  isDown = isDescending(arr);
  if (isUp) {
    return 1;
  } else if (isDown) {
    return 2;
  } else {
    return 0;
  }
}
function isAscending(arr) {
  return arr.every(function (x, i) {
    return i === 0 || x >= arr[i - 1];
  });
}
function isDescending(arr) {
  return arr.every(function (x, i) {
    return i === 0 || x <= arr[i - 1];
  });
}

// console.log(Mission4([ 31, 1]));
// console.log(Mission4([1, 2, 3, 3.5, 3.6, 4]));
// console.log(Mission4([7]));

module.export = {
  Mission1,
  Mission2,
  Mission3,
  Mission4,
};
