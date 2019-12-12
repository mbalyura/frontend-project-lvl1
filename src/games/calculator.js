import { greeting, congrats, run } from '..';

const rules = 'What is the result of the expression?';

const question = (n1, n2, operation) => console.log('\nQuestion:', n1, operation, n2);

const correctAnswer = (n1, n2, operation) => {
  if (operation === '+') return n1 + n2;
  if (operation === '-') return n1 - n2;
  return n1 * n2;
};

export default () => {
  greeting();

  run(rules, question, correctAnswer);

  congrats();
};
