import readlineSync from 'readline-sync';

const getUserInput = readlineSync.question;

const getRandNum = (r) => Math.floor(Math.random() * r);

let userName;

const run = (rules, question, correctAnswer) => {
  // greeting
  console.log('---------------------------\nWelcome to the Brain Games!\n---------------------------');
  userName = getUserInput('\nMay I have your name? ');
  console.log(`\nHi, ${userName}!`);

  // game rules
  console.log(rules);

  // start game
  let correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const num1 = getRandNum(100);
    const num2 = getRandNum(10);
    const operation = '+-*'[getRandNum(3)];
    const position = getRandNum(10);

    console.log('\nQuestion: ', ...question(num1, num2, operation, position));

    const answer = getUserInput('Your answer: ');

    if (correctAnswer(num1, num2, operation, position) === answer) {
      console.log(`Correct, ${userName}!`);
      correctAnswerCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(num1, num2, operation, position)}'.`);
      correctAnswerCount = 0;
    }
  }

  // congrats
  console.log(`\nYou win! Congratulations, ${userName}!`);
};

export default run;
