import run from '..';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const question = (n) => [n];

const isEven = (n) => n % 2 === 0;

const correctAnswer = (n) => (isEven(n) ? 'yes' : 'no');

export default () => run(rules, question, correctAnswer);
