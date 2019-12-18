import readlineSync from 'readline-sync';

const getRandNum = (r) => Math.floor(Math.random() * r);

const getUserInput = readlineSync.question;

let userName;

const run = (rules, questionAndAnswer) => {
  // greeting
  console.log('---------------------------\nWelcome to the Brain Games!\n---------------------------');
  userName = getUserInput('\nMay I have your name? ');
  console.log(`\nHi, ${userName}!`);

  // game rules
  console.log(rules);

  // start game
  for (let correctAnswerCount = 0; correctAnswerCount < 3;) {
    const [question, correctAnswer] = questionAndAnswer();

    console.log('\nQuestion: ', ...question);

    const userAnswer = getUserInput('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log(`Correct, ${userName}!`);
      correctAnswerCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      correctAnswerCount = 0;
    }
  }

  // congrats
  console.log(`\nYou win! Congratulations, ${userName}!`);
};

export { run, getRandNum };
