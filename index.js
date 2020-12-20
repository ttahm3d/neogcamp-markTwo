var readlineSync = require("readline-sync");
var chalk = require("chalk");

console.log("*********THE TOUGHEST GAME OF THRONES QUIZ*********");
console.log();
var userName = readlineSync.question(chalk.yellow.bold("What is your name? "));
console.log(chalk.hex("#8e44ad").bold("Welcome " + userName + " !!\n"));

var questions = [
  {
    question:
      "1. What were the exact words told by Ned Stark to Bran when he cold-bloodedly beheaded a deserter in the pilot episode? ",
    options: {
      A: "Our way is the old way",
      B: "All men must die",
      C: "Fear cuts deeper than a sword",
      D: "It was my duty",
    },
    answer: "A",
  },
  {
    question:
      "2. Where did Rhaegar Targaryen hid Lyanna Starka after abducting her? ",
    options: {
      A: "Volantis",
      B: "Tyrosh",
      C: "Dorne",
      D: "Pentos",
    },
    answer: "C",
  },
  {
    question: "3. Where Daenerys went to bring back her dragons? ",
    options: {
      A: "Meereen",
      B: "The House of Undying",
      C: "Dragonstone",
      D: "Qohor",
    },
    answer: "B",
  },
  {
    question: "4. What was Hodor's real name? ",
    options: {
      A: "Wess",
      B: "Walder",
      C: "Waif",
      D: "Wylis",
    },
    answer: "D",
  },
  {
    question: '5. Who was the head of "Brotherhood Without Banners?" ',
    options: {
      A: "Beric",
      B: "Thoros",
      C: "Riddle",
      D: "Steve",
    },
    answer: "A",
  },
];

var score = 0;

function checkTheAnswer(question, options, answer) {
  let que = question;
  let opt = options;
  console.log(chalk.bgHex("#0f64cc").inverse(que));
  console.log();
  console.log(chalk.hex("#dced6d")("A: " + opt["A"]));
  console.log(chalk.hex("#dced6d")("B: " + opt.B));
  console.log(chalk.hex("#dced6d")("C: " + opt.C));
  console.log(chalk.hex("#dced6d")("D: " + opt.D));
  console.log();
  let userAnswer = readlineSync.question("Your answer: ");

  if (userAnswer.toUpperCase() === answer) {
    console.log(chalk.hex("#02f517")("RIGHT!!!!"));
    score += 1;
  } else {
    console.log(chalk.hex("#ff0020")("WRONG!!!"));
  }
  console.log();

  console.log("Your current score = " + score + "\n");
}

for (let i = 0; i < questions.length; i = i + 1) {
  currentQuestion = questions[i];
  checkTheAnswer(
    currentQuestion.question,
    currentQuestion.options,
    currentQuestion.answer
  );
}

console.log(chalk.hex("#05fcf0")("------------------------------------"));
console.log(chalk.hex("#05fcf0")("Your final score = " + score));
console.log(chalk.hex("#05fcf0")("------------------------------------"));
