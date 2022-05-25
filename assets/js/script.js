// var questions = ["q1", "q2"];
// var answers = ["a2", "a1"];
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
    answer: "choise3",
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


//questions[1].question1;
var divContainer = document.querySelector(".divContainer");

function displayQuestion() {
  divContainer.textContent = questions[index].question1;
  
}

  //loop through choices
//   questions[index].choices.forEach(function (value) {
//     console.log(value);
//     var btn = document.createElement("button");
//     btn.textContent = value;
//     btn.classList.add("choiceBtn");
//     answerContainer.appendChild(btn);
//     answerContainer.onclick = checkAnswer();
//   });
// }

function checkAnswer(event) {
  console.log(event.target);
  //Grab the value of the button you clicked on
  //Use that value to compare to the answer
  //If correct: index++, call displayQuestion(), add score
  //If incorrect: index++, call displayQuestion(), substract score
}
//once a choice has been clicked on, index++, displayQuestion() is called again

displayQuestion();


// //startscreen.setAttribute("class", "hide")
// //questionscreen.removeAttribute("class", "hide")


// // This button starts the quiz
// startQuizButton.addEventListener("click",startQuiz);

// element.addEventListener("click", function() {
//   document.getElementById("demo").innerHTML = "Start";
// });
// uno de estos dos pa que haga click

//Timer
  // timerInterval = setInterval(function() {
  //   timeLeft--;
  //      quizTimer.textContent = "Time left: " + timeLeft;
  
  //    if(timeLeft === 0) {
  //      clearInterval(timerInterval);
  //     showScore();
  //     }
  //   }, 1000);
  // quizBody.style.display = "block";




// Store all h2 elements in a variable
var h2Tags = document.querySelectorAll("h2");

// Loop through all h2 elements to add styling 
for (var i = 0; i < h2Tags.length; i++) {
  h2Tags[i].setAttribute("style", "color: #463f3a; font-weight: bold; font-size: 25px; padding-left:10px;");
}

// // Variables using querySelector to target specific questions
// var question1El = document.querySelector(".question1");
// var question2El = document.querySelector(".question2");
// var question3El = document.querySelector(".question3");
// var question4El = document.querySelector(".question4");


// // Adding text to the questions
// question1El.textContent = "What is an API?";
// question2El.textContent = "What are examples of primitive data type?";
// question3El.textContent = "What is the href attribute?";
// question4El.textContent = "What does the queryselector?";