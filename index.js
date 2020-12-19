var readlineSync = require('readline-sync')
var chalk = require('chalk')


console.log("*********THE TOUGHEST GAME OF THRONES QUIZ*********")
console.log()
var userName = readlineSync.question(chalk.yellow.bold("What is your name? "));
console.log(chalk.hex('#8e44ad').bold("Welcome " + userName + " !!\n"))



var questions = [
  {
    question: {
      question: "What were the exact words told by Ned Stark to Bran when he cold-bloodedly beheaded a deserter in the pilot episode? ",
      options:[
      "Our way is the old way",
      "All men must die",
      "Fear cuts deeper than a sword",
      "It was my duty"
      ]
    },
    answer: "Our way is the old way"
  },
  {
    question: {
      question: "Where did Rhaegar Targaryen hid Lyanna Starka after abducting her? ",
      options: [
      "Dorne",
      "Tyrosh",
      "Volantis",
      "Pentos"
    ]
    },
    answer: "Dorne"
  },
  {
    question: {
      question: "Where Daenerys went to bring back her dragons? ",
      options: [
        "Meereen",
        "The House of Undying",
        "Dragonstone",
        "Qohor"
      ]
    },
    answer:"The House of Undying"
  },
  {
    question: {
      question: "What was Hodor's real name? ",
      options: [
        "Wylis",
        "Walder",
        "Waif",
        "Wess"
      ]
    },
    answer: "Wylis"
  },
  {
    question: {
      question:"Who was the head of Brotherhood Without Banners? ",
     options: [
        "Beric",
        "Thoros",
        "Riddle",
        "Steve"
      ]
    },
    answer: "Beric"
  }
]
    
var score = 0;

function checkTheAnswer(question, answer){
  let que = question.question;
  let opt = [...question.options]
  console.log("------------------------------------")
  console.log(chalk.hex('#eaff03')(que))
  for (let i = 0; i < opt.length; i++) {
    console.log(chalk.hex('#dced6d')(opt[i]))
  }
  let userAnswer = readlineSync.question("Enter your answer: ")
  console.log("Your answer is: " + userAnswer)
  console.log()

  if (userAnswer === answer) {
    console.log(chalk.hex('#02f517')("RIGHT!!!!"))
    score +=1
  }
  else {
    console.log(chalk.hex('#ff0020')('WRONG!!!'))
  }
  console.log()
  
  console.log("Your current score = " + score + "\n")
}

for (let i = 0; i< questions.length; i = i+1) {
  currentQuestion = questions[i];
  checkTheAnswer(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.hex('#05fcf0')("------------------------------------"))
console.log(chalk.hex('#05fcf0')("Your final score = " + score))
console.log(chalk.hex('#05fcf0')("------------------------------------"))

