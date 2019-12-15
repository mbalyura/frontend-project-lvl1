import run from '..';

const rules = '\nAnswer "yes" if the number is even, otherwise answer "no".';

const question = (n) => [n];

const correctAnswer = (n) => (n % 2 === 0 ? 'yes' : 'no');

export default () => run(rules, question, correctAnswer);
