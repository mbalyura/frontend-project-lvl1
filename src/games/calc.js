import run from '..';
import getRandNum from '../utils';

const rules = 'What is the result of the expression?';

const calculator = (num1, operation, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const getRandOperation = (operations = '+-*') => operations[getRandNum(operations.length)];
const numFactor = 10;

const questionAndAnswer = () => {
  const num1 = getRandNum(numFactor);
  const num2 = getRandNum(numFactor);
  const operation = getRandOperation();
  const question = [num1, operation, num2];
  const correctAnswer = `${calculator(num1, operation, num2)}`;
  return [question, correctAnswer];
};

export default () => run(rules, questionAndAnswer);
