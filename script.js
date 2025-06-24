const questions = [
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Microsoft", "Google", "Apple"],
    answer: "Netscape"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "**", "#"],
    answer: "//"
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    answer: "<script>"
  },
  {
    question: "Which method is used to print in console?",
    options: ["print()", "console.log()", "write()", "log.console()"],
    answer: "console.log()"
  },
  {
    question: "How do you create a function in JavaScript?",
    options: ["function = myFunc()", "function myFunc()", "create myFunc()", "def myFunc()"],
    answer: "function myFunc()"
  },
  {
    question: "How can you add a comment in JavaScript?",
    options: ["<!-- comment -->", "// comment", "' comment", "** comment **"],
    answer: "// comment"
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: ["call function myFunction()", "myFunction()", "call myFunction", "run myFunction()"],
    answer: "myFunction()"
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["*", "=", "==", "==="],
    answer: "="
  },
  {
    question: "What is the correct way to write an array?",
    options: ["var colors = 'red', 'green';", "var colors = (1:'red', 2:'green');", "var colors = ['red', 'green'];", "var colors = 1 = ('red'), 2 = ('green');"],
    answer: "var colors = ['red', 'green'];"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onmouseover", "onchange", "onclick", "onmouseclick"],
    answer: "onclick"
  },
  {
    question: "Which method converts JSON to a JavaScript object?",
    options: ["JSON.toObject()", "JSON.parse()", "JSON.convert()", "JSON.stringify()"],
    answer: "JSON.parse()"
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: ["variable carName;", "v carName;", "var carName;", "dim carName;"],
    answer: "var carName;"
  },
  {
    question: "What will `typeof []` return?",
    options: ["object", "array", "list", "undefined"],
    answer: "object"
  },
  {
    question: "Which method removes the last element of an array?",
    options: ["pop()", "remove()", "shift()", "last()"],
    answer: "pop()"
  },
  {
    question: "What does `NaN` stand for?",
    options: ["Not a Number", "Negative and Null", "New and Null", "None at Null"],
    answer: "Not a Number"
  },
  {
    question: "How do you write a conditional in JavaScript?",
    options: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i = 5 then"],
    answer: "if (i == 5)"
  },
  {
    question: "Which JavaScript method is used to access an HTML element by ID?",
    options: ["getElement(id)", "getElementById()", "queryElement()", "getIdElement()"],
    answer: "getElementById()"
  },
  {
    question: "What is the default value of `undefined + 1`?",
    options: ["1", "NaN", "undefined1", "error"],
    answer: "NaN"
  },
  {
    question: "What is the correct syntax to write a `for` loop?",
    options: ["for (i = 0; i <= 5; i++)", "for (i <= 5; i++)", "for i = 1 to 5", "for (i++ i = 0; i <= 5;)"],
    answer: "for (i = 0; i <= 5; i++)"
  },
  {
    question: "What does `===` mean in JavaScript?",
    options: ["Equal", "Equal value", "Equal type", "Equal value and type"],
    answer: "Equal value and type"
  }
];

let currentQuestion = 0;
let score = 0;

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionBox.textContent = q.question;
  optionsBox.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option");
    btn.addEventListener("click", () => checkAnswer(btn, q.answer));
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(button, correctAnswer) {
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach(btn => btn.disabled = true);

  if (button.textContent === correctAnswer) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionBox.textContent = "";
  optionsBox.innerHTML = "";
  nextBtn.style.display = "none";
  resultBox.textContent = `You scored ${score} out of ${questions.length}`;
}

loadQuestion();