import { run, getRandNum } from '..';

const rules = 'What number is missing in the progression?';

const progression = (start, step, position) => {
  const res = [];
  const progressionLength = 10;
  let el = start;
  while (res.length < progressionLength) {
    res.push(el);
    el += step;
  }
  res[position] = '..';
  return res;
};

const questionAndAnswer = () => {
  const start = getRandNum(100);
  const step = getRandNum(10);
  const position = getRandNum(10);
  const question = progression(start, step, position);
  const correctAnswer = `${step * position + start}`;
  return [question, correctAnswer];
};

export default () => run(rules, questionAndAnswer);
