import run from '..';
import getRandomIntegerFromRange from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers:';

const gcd = (n1, n2) => (n1 !== 0 ? gcd(n2 % n1, n1) : n2);

const getQuestionAndAnswer = () => {
  const num1 = getRandomIntegerFromRange(1, 100);
  const num2 = getRandomIntegerFromRange(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [question, correctAnswer];
};

export default () => run(gameDescription, getQuestionAndAnswer);
