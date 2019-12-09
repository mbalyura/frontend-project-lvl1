import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('---------------------------\nWelcome to the Brain Games!\n---------------------------');
};

const getUserInput = readlineSync.question;

const isEven = (n) => n % 2 === 0;
const getRandNum = () => Math.ceil(Math.random() * 1000);

let userName;

const run = () => {
  greeting();
  userName = getUserInput('\nMay I have your name? ');
  console.log(`\nHi, ${userName}!`);
};

const oddOrEven = () => {
  let correctAnswerCount = 0;
  const correctAnswer = (n) => (isEven(n) ? 'yes' : 'no');

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswerCount < 3) {
    const number = getRandNum();
    console.log('\nQuestion:', number);
    const answer = getUserInput('Your answer: ');

    if (correctAnswer(number) === answer) {
      console.log(`Correct, ${userName}!`);
      correctAnswerCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(number)}'.`);
      correctAnswerCount = 0;
    }
  }

  console.log(`\nYou win! \nCongratulations, ${userName}!`);
};

export { run, oddOrEven };
