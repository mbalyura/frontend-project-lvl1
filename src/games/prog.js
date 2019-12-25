import run from '..';
import getRandNum from '../utils';

const gameDescription = 'What number is missing in the progression?';

const progression = (start, step, position, length) => {
  const result = [];
  let element = start;
  while (result.length < length) {
    result.push(element);
    element += step;
  }
  result[position] = '..';
  return result;
};

const startFactor = 100;
const stepFactor = 10;
const progLength = 10;

const getQuestionAndAnswer = () => {
  const start = getRandNum(startFactor);
  const step = getRandNum(stepFactor);
  const position = getRandNum(progLength);
  const question = progression(start, step, position, progLength);
  const correctAnswer = String(step * position + start);
  return [question, correctAnswer];
};

export default () => run(gameDescription, getQuestionAndAnswer);
