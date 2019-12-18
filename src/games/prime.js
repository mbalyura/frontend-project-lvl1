import { run, getRandNum } from '..';

const rules = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return n > 1;
};

const questionAndAnswer = () => {
  const num = getRandNum(100);
  const question = [num];
  const correctAnswer = (isPrime(num) ? 'yes' : 'no');
  return [question, correctAnswer];
};

export default () => run(rules, questionAndAnswer);
