import run from '..';
import getRandomIntegerFromRange from '../utils';

const gameDescription = 'What number is missing in the progression?';

const progression = (start, step, position, length) => {
  const result = [];
  let element = start;
  while (result.length < length) {
    result.push(element);
    element += step;
  }
  result[position] = '..';
  return result.join(' ');
};

const progLength = 10;

const getQuestionAndAnswer = () => {
  const start = getRandomIntegerFromRange(1, 100);
  const step = getRandomIntegerFromRange(5, 50);
  const position = getRandomIntegerFromRange(1, 10);
  const question = progression(start, step, position, progLength);
  const correctAnswer = String(step * position + start);
  return [question, correctAnswer];
};

export default () => run(gameDescription, getQuestionAndAnswer);
