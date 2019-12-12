import readlineSync from 'readline-sync';

const getUserInput = readlineSync.question;

let userName;

const getRandNum = (r) => Math.floor(Math.random() * r);

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
    const n1 = getRandNum(100);
    const n2 = getRandNum(10);
    const operation = '+-*'[getRandNum(3)];
    const position = getRandNum(10);

    question(n1, n2, operation, position);

    const answer = getUserInput('Your answer: ');

    if (String(correctAnswer(n1, n2, operation, position)) === answer) {
      console.log(`Correct, ${userName}!`);
      correctAnswerCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(n1, n2, operation, position)}'.`);
      correctAnswerCount = 0;
    }
  }
};

export {
  greeting, congrats, run,
};
