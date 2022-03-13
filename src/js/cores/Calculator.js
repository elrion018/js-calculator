const PLUS = '+';
const SUBSTRACT = '-';
const DIVIDE = '/';
const MUTIPLY = '*';
const EQUAL = '=';

const operations = {
  [PLUS]: (numberA, numberB) => numberA + numberB,
  [SUBSTRACT]: (numberA, numberB) => numberA - numberB,
  [DIVIDE]: (numberA, numberB) => Math.trunc(numberA / numberB),
  [MUTIPLY]: (numberA, numberB) => Math.trunc(numberA * numberB),
};

export default class Calculator {
  #numbers;
  #operators;

  constructor() {
    this.#numbers = [0];
    this.#operators = [];
  }

  get numbers() {
    return this.#numbers;
  }

  get operators() {
    return this.#operators;
  }

  inputNumber(numberText) {
    const number = Number(numberText);

    if (this.#numbers.length > this.#operators.length)
      this.#buildNumber(number);
    else this.#appendNumber(number);
  }

  inputOperator(operator) {
    if (operator === EQUAL) return this.#calculateNumbers();

    this.#operators.push(operator);
  }

  /** numbers의 마지막 숫자의 자릿수를 증가시키는 메소드 */
  #buildNumber(number) {
    this.#numbers[this.#numbers.length - 1] =
      this.#numbers.at(-1) * 10 + number;
  }

  /** numbers에 새로운 number를 추가하는 메소드 */
  #appendNumber(number) {
    this.#numbers = this.#numbers.concat([number]);
  }

  #calculateNumbers() {
    const calculatedNumber = operations[this.#operators[0]](
      this.#numbers[0],
      this.#numbers[1]
    );

    this.#numbers = [calculatedNumber];
    this.#operators = [];
  }

  getNumbersAndOperators() {
    const numbersAndOperators = this.#numbers.reduce((acc, number, index) => {
      if (this.#operators[index])
        return acc.concat(number, this.#operators[index]);

      return acc.concat(number);
    }, []);

    return numbersAndOperators;
  }

  clearNumbersAndOperators() {
    this.#numbers = [0];
    this.#operators = [];
  }
}
