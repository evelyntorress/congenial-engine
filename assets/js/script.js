// var questions = ["q1", "q2"];
// var answers = ["a2", "a1"];
var index = 0;
var questions = [
  {
    title: "What is 1+1",
    choices: [1, 2, 3, 4, 5],
    answer: 2,
  },
  {
    title: "What is 1+2",
    choices: [1, 2, 3, 4, 5],
    answer: 3,
  },
];

//questions[1].title;

function displayQuestion() {
  divContainer.textContent = questions[index].title;

  //loop through choices
  questions[index].choices.forEach(function (value) {
    console.log(value);
    var btn = document.createElement("button");
    btn.textContent = value;
    btn.classList.add("choiceBtn");
    answerContainer.appendChild(btn);
    answerContainer.onclick = checkAnswer();
  });
}

function checkAnswer(event) {
  console.log(event.target);
  //Grab the value of the button you clicked on
  //Use that value to compare to the answer
  //If correct: index++, call displayQuestion(), add score
  //If incorrect: index++, call displayQuestion(), substract score
}
//once a choice has been clicked on, index++, displayQuestion() is called again

displayQuestion();


//startscreen.setAttribute("class", "hide")
//questionscreen.removeAttribute("class", "hide")
