

// Array with questions and answers
var index = 0;
var questions = [
  {
    question1: "What is an API?",
    choice1: "Set of methods",
    choice2: "Set of events",
    choice3: "Set of URLs",
    choice4: "All of the above",
    answer: "choice4",
   
  },
  {
    question2: "What are examples of primitive data type?",
    choice1: "String",
    choice2: "Number",
    choice3: "CSS",
    choice4: "1 and 2",
    answer: "choice4",
  },
  {
    question3: "What is the href attribute?",
    choice1: "Specifies what media/device the linked document is optimized for.",
    choice2: "Specifies the relationship between the current document and the linked document.",
    choice3: "Specifies the URL of the page the link goes to.",
    choice4: "Specifies the media type of the linked document.",
    answer: "choice3",
  },
  {
    question4: "What is an array?",
    choice1: "Is an eventListener",
    choice2: "Is a variable, which can hold more than one value.",
    choice3: "Is a variable, which can hold only one value",
    choice4: "Is where we style our HTML.",
    answer: "choice2",
  },
];

// Loop through the questions

var container = document.querySelector(".divContainer");

  for (var i = 0; i < questions.length; i++) {
  index ++ ; container[i];
}

// The startQuiz function is called when the start button is clicked

var startButton = document.querySelector(".start-button");

function startQuiz()

// Attach event listener to start button to call startQuiz function on click
startButton.addEventListener("click", startQuiz);

function displayQuestion() {
  divContainer.textContent = questions[index].question1;
}

