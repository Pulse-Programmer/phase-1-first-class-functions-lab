// Code your solution in this file!
const returnFirstTwoDrivers = function (namesList) {
  return namesList.slice(0, 2);
};

const returnLastTwoDrivers = (namesList) => namesList.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
  return (fare) => fare * x;
}

function fareDoubler(fare) {
  const doubler = createFareMultiplier(2);
  return doubler(fare);
}

function fareTripler(fare) {
  const tripler = createFareMultiplier(3);
  return tripler(fare);
}

function selectDifferentDrivers(namesList, fn) {
  if (fn === selectingDrivers[0] || fn === selectingDrivers[1]) {
    return fn(namesList);
  } else {
    console.log(
      "Error: Enter one of the functions from 'selectingDrivers' list!",
    );
  }
}

//console.log(selectDifferentDrivers([2, 3, 4, 5, 5], fn));
//console.log(selectDifferentDrivers([1, 2, 34, 4], fareDoubler));
