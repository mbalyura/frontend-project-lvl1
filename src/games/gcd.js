import { run, getRandNum } from '..';

const rules = 'Find the greatest common divisor of given numbers:';

const gcd = (n1, n2) => `${n1 !== 0 ? gcd(n2 % n1, n1) : n2}`;

const questionAndAnswer = () => {
  const num1 = getRandNum(100);
  const num2 = getRandNum(100);
  const question = [num1, num2];
  const correctAnswer = gcd(num1, num2);
  return [question, correctAnswer];
};

export default () => run(rules, questionAndAnswer);
