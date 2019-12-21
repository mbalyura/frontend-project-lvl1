import run from '..';
import getRandNum from '../utils';

const rules = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const numFactor = 100;

const questionAndAnswer = () => {
  const num = getRandNum(numFactor);
  const question = [num];
  const correctAnswer = (isPrime(num) ? 'yes' : 'no');
  return [question, correctAnswer];
};

export default () => run(rules, questionAndAnswer);
