import run from '..';

const rules = 'Find the greatest common divisor of given numbers:';

const question = (n1, n2) => [n1, n2];

const correctAnswer = function gcd(n1, n2) {
  return `${n1 !== 0 ? gcd(n2 % n1, n1) : n2}`;
};

export default () => run(rules, question, correctAnswer);
