import run from '..';
import getRandomIntegerFromRange from '../utils';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomIntegerFromRange(1, 100);
  const correctAnswer = (isEven(question) ? 'yes' : 'no');
  return [question, correctAnswer];
};

export default () => run(gameDescription, getQuestionAndAnswer);
