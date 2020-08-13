module.exports.App = class App {
  hasMatchingBrackets(characters = '') {
    if (characters.charAt(0) === '}') {
      return false;
    }

    let isBalancedCount = 0;

    for (let i = 0; i < characters.length; i++) {
      const currentChar = characters[i];

      if (currentChar === '{') {
        isBalancedCount++;
      }

      if (currentChar === '}') {
        isBalancedCount--;
      }
    }

    return isBalancedCount === 0;
  }

  findTheSumOfMultiplesOfThreeAndFiveBelowLimit(upperLimit = 1000) {
    let sum = 0;

    for (let i = 0; i < upperLimit; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    return sum;
  }
};
