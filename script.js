// Declare variables for the elements that Javascript can grab and change the style in the DOM

let choices = document.getElementById("choices");
let btn = document.getElementById("button");
let quizDisplay = document.getElementById("display");
let quizScore = document.getElementById("quizScore");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");
let choice4 = document.getElementById("choice4");
let scoreCard = document.getElementById("scoreCard");
let body = document.querySelector("body");

const quiz = {
  // Develop 10 Javascript quiz questions to push to the quiz display.
  questions: [
    {
      q: "Javascript Code can be called by using?",
      options: ["RMI", "Triggering Event", "Preprocessor", "Function/Method"],
      answer: 4,
    },

    {
      q:
        "An unordered collection of properties, each of which has a name and a value is called?",
      options: ["String", "Object", "Float", "All of the above"],
      answer: 2,
    },

    {
      q: "What is the purpose of a return statement in a function?",
      options: [
        "Returns the value and continues executing the rest of the statements",
        "Returns the value and stops the program",
        "Returns the value and stops executing the function",
        "Stops executing the function and retuns the value",
      ],
      answer: 4,
    },

    {
      q: "Javascript can be written?",
      options: [
        "directly into the JS file and included into HTML",
        "directly on the server page",
        "directly into HTML pages",
        "All of the above",
      ],
      answer: 1,
    },

    {
      q: "The statement a===b refers to:",
      options: [
        "Both a and b are equal in value, type, and reference address",
        "Both a and b are equal in value",
        "Both a and b are equal in value and type",
        "There is no such statement",
      ],
      answer: 3,
    },

    {
      q: "Which of the following is a ternary operator?",
      options: ["+", ":", "-", "?:"],
      answer: 4,
    },

    {
      q: "An event handler is a:",
      options: ["function", "interface", "event", "handler"],
      answer: 1,
    },

    {
      q:
        "The keyword or property used to refer to an object through which they were invoked is",
      options: ["from", "to", "this", "object"],
      answer: 3,
    },

    {
      q:
        "Which method is used to add an event such as 'click' to an element in Javascript?",
      options: [
        ".getElementbyId",
        ".addEventListener",
        ".document.write(click)",
        ".console.log(click)",
      ],
      answer: 2,
    },

    {
      q: "Booleans have two possibilities, which are?",
      options: [
        "True and false",
        "Right and wrong",
        "String and Number",
        "Booleans have more than two possibilities",
      ],
      answer: 1,
    },
  ],

  index: 0,

  load: function () {
    if (this.index <= this.questions.length - 1) {
      quizDisplay.innerHTML =
        this.index + 1 + ") " + this.questions[this.index].q;

      // Push each question to the quiz display.
      choice1.innerHTML = this.questions[this.index].options[0];
      choice2.innerHTML = this.questions[this.index].options[1];
      choice3.innerHTML = this.questions[this.index].options[2];
      choice4.innerHTML = this.questions[this.index].options[3];
      this.quizScore();

      // When quiz is complete, prompt the user to refresh to try again and show score.
    } else {
      quizDisplay.innerHTML = "Quiz Complete.";
      choice1.style.display = "none";
      choice2.style.display = "none";
      choice3.style.display = "none";
      choice4.style.display = "none";
      scoreCard.style.display = "inline";
      quizScore.style.display = "inline";
      btn.innerHTML = "press F5 to try again.";
      btn.body.style.background = "yellow";
    }
  },

  // Move on to the next question.
  next: function () {
    this.index++;
    this.load();
  },

  check: function (answer) {
    var id = answer.id.split("");

    if (id[id.length - 1] == this.questions[this.index].answer) {
      this.score++;
      answer.className = "correct";
      this.quizScore();
    } else {
      answer.className = "incorrect";
    }
  },

  notClickAble: function () {
    for (let i = 0; i < choices.children.length; i++) {
      choices.children[i].getElementsByClassName.pointerEvents = "none";
    }
  },

  clickAble: function () {
    for (let i = 0; i < choices.children.length; i++) {
      choices.children[i].getElementsByClassName.pointerEvents = "auto";
      choices.children[i].className = "";
    }
  },

  score: 0,
  quizScore: function () {
    quizScore.innerHTML = this.score + "/" + this.questions.length;
  },
};

window.onload = quiz.load();

function button(answer) {
  quiz.check(answer);
  quiz.notClickAble();
}

function next() {
  quiz.next();
  quiz.clickAble();
}

function saveQuiz() {
  let scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores.push(score);

  localStorage.setItem("scores", JSON.stringify(scores));
}
console.log(saveQuiz);
console.log(quizScore);
