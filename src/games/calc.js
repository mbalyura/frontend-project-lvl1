import run from '..';
import getRandNum from '../utils';

const gameDescription = 'What is the result of the expression?';

const calculator = (num1, operation, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 42;
  }
};

const operations = '+-*';
const getRandOperation = (ops) => ops[getRandNum(operations.length)];
const numFactor = 10;

const getQuestionAndAnswer = () => {
  const num1 = getRandNum(numFactor);
  const num2 = getRandNum(numFactor);
  const operation = getRandOperation(operations);
  const question = [num1, operation, num2];
  const correctAnswer = String(calculator(num1, operation, num2));
  return [question, correctAnswer];
};

export default () => run(gameDescription, getQuestionAndAnswer);
