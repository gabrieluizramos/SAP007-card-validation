const DOUBLE_LIMIT = 9;
const IS_DIVISIBLE_BY = 10;

const validator = {
  isValid(number) {
    // solucao 1 - invertendo os numeros
    const reverseNumber = number.split('').reverse();
    let sum = 0;

    // solucao 2 - rodando o array ao contrario
    // const reverseNumber = number.split('');
    // eslint-disable-next-line
    // for (let index = reverseNumber.length - 1; index <= 0; index--) {
    for (let index = 0; index < reverseNumber.length; index++) {
      const currentNumber = Number(reverseNumber[index]);
      const isOdd = index % 2 !== 0;

      if (isOdd) {
        let double = currentNumber * 2;
        if (double > DOUBLE_LIMIT) {
          // double = double - DOUBLE_LIMIT;
          double -= DOUBLE_LIMIT;
        }

        // sum = sum + double;
        sum += double;
      } else {
        sum += currentNumber;
      }
    }

    const isValidNumber = sum % IS_DIVISIBLE_BY === 0;
    return isValidNumber;
  }
};

export default validator;
