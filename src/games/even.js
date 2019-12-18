import { run, getRandNum } from '..';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const questionAndAnswer = () => {
  const num = getRandNum(100);
  const question = [num];
  const correctAnswer = (isEven(num) ? 'yes' : 'no');
  return [question, correctAnswer];
};

export default () => run(rules, questionAndAnswer);
