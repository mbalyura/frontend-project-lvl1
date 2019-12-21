import run from '..';
import getRandNum from '../utils';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const numFactor = 100;

const questionAndAnswer = () => {
  const num = getRandNum(numFactor);
  const question = [num];
  const correctAnswer = (isEven(num) ? 'yes' : 'no');
  return [question, correctAnswer];
};

export default () => run(rules, questionAndAnswer);
