import readlineSync from 'readline-sync';

const getUserInput = readlineSync.question;

let userName;

const isEven = (n) => n % 2 === 0;
const getRandNum = () => Math.ceil(Math.random() * 100);

const greeting = () => {
  console.log('---------------------------\nWelcome to the Brain Games!\n---------------------------');
  userName = getUserInput('\nMay I have your name? ');
  console.log(`\nHi, ${userName}!`);
};

const congrats = () => {
  console.log(`\nYou win! \nCongratulations, ${userName}!`);
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
};

const calculator = () => {
  let correctAnswerCount = 0;
  const correctAnswer = (n1, n2, operation) => {
    if (operation === '+') return String(n1 + n2);
    if (operation === '-') return String(n1 - n2);
    return String(n1 * n2);
  };

  console.log('What is the result of the expression?');

  while (correctAnswerCount < 3) {
    const number1 = getRandNum();
    const number2 = getRandNum();
    const operation = '+-*'[Math.floor(Math.random() * 3)];
    console.log(number1, operation, number2);
    const answer = getUserInput('Your answer: ');

    if (correctAnswer(number1, number2, operation) === answer) {
      console.log(`Correct, ${userName}!`);
      correctAnswerCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(number1, number2, operation)}'.`);
      correctAnswerCount = 0;
    }
  }
};

export {
  greeting, congrats, oddOrEven, calculator,
};
