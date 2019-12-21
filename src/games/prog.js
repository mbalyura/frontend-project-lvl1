import run from '..';
import getRandNum from '../utils';

const rules = 'What number is missing in the progression?';

const progression = (start, step, position, length) => {
  const res = [];
  let el = start;
  while (res.length < length) {
    res.push(el);
    el += step;
  }
  res[position] = '..';
  return res;
};

const startFactor = 100;
const stepFactor = 10;
const progLength = 10;

const questionAndAnswer = () => {
  const start = getRandNum(startFactor);
  const step = getRandNum(stepFactor);
  const position = getRandNum(progLength);
  const question = progression(start, step, position, progLength);
  const correctAnswer = `${step * position + start}`;
  return [question, correctAnswer];
};

export default () => run(rules, questionAndAnswer);
