const input = require(`readline-sync`);

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5000 meters == 5 kilometers? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++)
  candidateAnswers[i] = input.question(questions[i]);

}

function gradeQuiz(candidateAnswers) {
  let numberOfCorrectAnswers = 0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (let i = 0; i < questions.length; i++)
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()){
      console.log(`Your answer ${candidateAnswers[i]} is correct!`);
      numberOfCorrectAnswers++;
    } else {
        console.log(`Your answer ${candidateAnswers[i]} is incorrect. The correct answer is ${correctAnswers[i]}.`);
    }

  console.log("")
  console.log("CANDIDATE NAME: " + (candidateName));
  
  console.log(`1) ${questions[0]}
  Your answer: ${candidateAnswers[0]}
  Correct answer: ${correctAnswers[0]}
  `);
  
  console.log(`2) ${questions[1]}
  Your answer: ${candidateAnswers[1]}
  Correct answer: ${correctAnswers[1]}
  `);

  console.log(`3) ${questions[2]}
  Your answer: ${candidateAnswers[2]}
  Correct answer: ${correctAnswers[2]}
  `);

  console.log(`4) ${questions[3]}
  Your answer: ${candidateAnswers[3]}
  Correct answer: ${correctAnswers[3]}
  `);

  console.log(`5) ${questions[4]}
  Your answer: ${correctAnswers[4]}
  Correct answer: ${correctAnswers[4]}
  `);


  let grade = numberOfCorrectAnswers / correctAnswers.length * 100;
  console.log(`>>> Overall grade: ${grade}% (${numberOfCorrectAnswers} of ${correctAnswers.length} responses correct.) <<<`);

  if (grade >= 80) {
    console.log(">>> PASSED <<<");
  } else {
      console.log(">>> FAILED <<<");
  }
  
  return grade;

}
function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name // 
  console.log("Hello, " + candidateName + "!");

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};