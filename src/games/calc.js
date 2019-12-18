import { run, getRandNum } from '..';

const rules = 'What is the result of the expression?';

const calculator = (num1, operation, num2) => {
  if (operation === '+') return `${num1 + num2}`;
  if (operation === '-') return `${num1 - num2}`;
  return `${num1 * num2}`;
};

const questionAndAnswer = () => {
  const num1 = getRandNum(10);
  const num2 = getRandNum(10);
  const operation = '+-*'[getRandNum(3)];
  const question = [num1, operation, num2];
  const correctAnswer = calculator(num1, operation, num2);
  return [question, correctAnswer];
};

export default () => run(rules, questionAndAnswer);
