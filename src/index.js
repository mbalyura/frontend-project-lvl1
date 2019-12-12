import readlineSync from 'readline-sync';

const getUserInput = readlineSync.question;

let userName;

const getRandNum = () => Math.ceil(Math.random() * 100);

const greeting = () => {
  console.log('---------------------------\nWelcome to the Brain Games!\n---------------------------');
  userName = getUserInput('\nMay I have your name? ');
  console.log(`\nHi, ${userName}!`);
};

const congrats = () => {
  console.log(`\nYou win! \nCongratulations, ${userName}!`);
};

const run = (rules, question, correctAnswer) => {
  let correctAnswerCount = 0;

  console.log(rules);

  while (correctAnswerCount < 3) {
    const number1 = getRandNum();
    const number2 = getRandNum();
    const operation = '+-*'[Math.floor(Math.random() * 3)];

    question(number1, number2, operation);

    const answer = getUserInput('Your answer: ');

    if (String(correctAnswer(number1, number2, operation)) === answer) {
      console.log(`Correct, ${userName}!`);
      correctAnswerCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(number1, number2, operation)}'.`);
      correctAnswerCount = 0;
    }
  }
};

export {
  greeting, congrats, run,
};
