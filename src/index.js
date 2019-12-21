import * as getUserInput from 'readline-sync';

const run = (rules, questionAndAnswer) => {
  console.log('---------------------------\nWelcome to the Brain Games!\n---------------------------');
  const userName = getUserInput.question('\nMay I have your name? ');
  console.log(`\nHi, ${userName}!`);

  console.log(rules);

  for (let roundCount = 1; roundCount <= 3; roundCount += 1) {
    const [question, correctAnswer] = questionAndAnswer();

    console.log('\nQuestion: ', ...question);

    const userAnswer = getUserInput.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log(`Correct, ${userName}!`);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (roundCount === 3) console.log(`\nYou win! Congratulations, ${userName}!`);
  }
};

export default run;
