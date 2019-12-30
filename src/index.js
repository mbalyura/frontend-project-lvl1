import * as getUserInput from 'readline-sync';

const roundsCount = 3;

const run = (gameDescription, getQuestionAndAnswer) => {
  console.log('---------------------------\nWelcome to the Brain Games!\n---------------------------');
  const userName = getUserInput.question('\nMay I have your name? ');
  console.log(`\nHi, ${userName}!`);

  console.log(gameDescription);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();

    console.log('\nQuestion: ', question);

    const userAnswer = getUserInput.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log(`Correct, ${userName}!`);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`\nYou win! Congratulations, ${userName}!`);
};

export default run;
