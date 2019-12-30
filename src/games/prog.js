import run from '..';
import getRandomIntegerFromRange from '../utils';

const gameDescription = 'What number is missing in the progression?';

const getProgressionWithHiddenElement = (start, step, position, length) => {
  const result = [];
  for (let element = start; result.length < length; element += step) {
    result.push(element);
  }
  result[position] = '..';
  return result.join(' ');
};

const progressionLength = 10;

const getQuestionAndAnswer = () => {
  const start = getRandomIntegerFromRange(1, 100);
  const step = getRandomIntegerFromRange(5, 50);
  const position = getRandomIntegerFromRange(1, progressionLength);
  const question = getProgressionWithHiddenElement(start, step, position, progressionLength);
  const correctAnswer = String(step * position + start);
  return [question, correctAnswer];
};

export default () => run(gameDescription, getQuestionAndAnswer);
