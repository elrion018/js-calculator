import Calculator from './cores/Calculator.js';
import Validator from './cores/Validator.js';
import Input from './cores/Input.js';
import View from './views/View.js';

const rootElement = document.querySelector('#app');
const validator = new Validator();
const calculator = new Calculator();
const input = new Input(calculator, validator);

View(rootElement, input);
