import run from '..';
import getRandomIntegerFromRange from '../utils';

const gameDescription = 'What is the result of the expression?';

const calculate = (num1, operation, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const operations = '+-*';

const getQuestionAndAnswer = () => {
  const num1 = getRandomIntegerFromRange(1, 100);
  const num2 = getRandomIntegerFromRange(5, 20);
  const operation = operations[getRandomIntegerFromRange(0, operations.length - 1)];
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = String(calculate(num1, operation, num2));
  return [question, correctAnswer];
};

export default () => run(gameDescription, getQuestionAndAnswer);
