import run from '..';

const rules = '\nWhat is the result of the expression?';

const question = (n1, n2, operation) => [n1, operation, n2];

const correctAnswer = (n1, n2, operation) => {
  if (operation === '+') return `${n1 + n2}`;
  if (operation === '-') return `${n1 - n2}`;
  return `${n1 * n2}`;
};

export default () => run(rules, question, correctAnswer);
