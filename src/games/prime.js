import run from '..';
import getRandomIntegerFromRange from '../utils';

const gameDescription = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomIntegerFromRange(1, 100);
  const correctAnswer = (isPrime(question) ? 'yes' : 'no');
  return [question, correctAnswer];
};

export default () => run(gameDescription, getQuestionAndAnswer);
