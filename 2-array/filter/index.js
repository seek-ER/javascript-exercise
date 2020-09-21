function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(item => item % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  let unitCollection = [];
  function containOrNot(number) {
    if (!unitCollection.includes(number)) {
      unitCollection.push(number);
      return true;
    } else {
      return false;
    }
  }
  return collection.filter(item => containOrNot(item));
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
