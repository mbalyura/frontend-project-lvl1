import run from '..';

const rules = 'What number is missing in the progression?';

const progression = (start, step, position) => {
  const res = [];
  let el = start;
  while (res.length < 10) {
    res.push(el);
    el += step;
  }
  res[position] = '..';
  return res;
};

const question = (n1, n2, _o, position) => progression(n1, n2, position);

const correctAnswer = (n1, n2, _o, position) => `${n2 * position + n1}`;

export default () => run(rules, question, correctAnswer);
