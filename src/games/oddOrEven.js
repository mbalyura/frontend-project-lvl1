import { greeting, congrats, run } from '..';

const rules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
const question = (n) => console.log('\nQuestion:', n);
const correctAnswer = (n) => (n % 2 === 0 ? 'yes' : 'no');

export default () => {
  greeting();

  run(rules, question, correctAnswer);

  congrats();
};
