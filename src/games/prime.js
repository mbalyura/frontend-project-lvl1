import run from '..';

const rules = '\nAnswer "yes" if the number is prime, otherwise answer "no".';

const question = (n) => [n];

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return n > 1;
};

const correctAnswer = (n) => (isPrime(n) ? 'yes' : 'no');

export default () => run(rules, question, correctAnswer);
