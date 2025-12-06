const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Kolkata", "Delhi", "Chennai"],
    answer: "Delhi",
  },
  {
    question: "Which language is used for web apps?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheet",
      "Color Style Sheet",
      "Creative Style Syntax",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Where can you find a penguin?",
    options: ["Rajasthan", "Himalay", "Antarctica", "Arabian Sea"],
    answer: "Antarctica",
  },
  {
    question: "HTML stands for?",
    options: [
      "Hyper Trainer Marking Language",
      "HyperText Markup Language",
      "HyperText Markdown Language",
      "HighText Machine Language",
    ],
    answer: "HyperText Markup Language",
  },
];

let currentQuesIndex = 0;
let score = 0;

// DOM elements access

const questionText = document.getElementById("questionText");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const ansDiv = [option1, option2, option3, option4];
const quizContainer = document.getElementById("quizContainer");

//show question function

function showQuestion(i) {
  //resetOptions()
  const q = questions[i];
  questionText.innerText = `Q${i + 1}:${q.question}`;
  option1.innerText = q.options[0];
  option2.innerText = q.options[1];
  option3.innerText = q.options[2];
  option4.innerText = q.options[3];
}

//option-Handling

ansDiv.forEach(function (option) {
  option.addEventListener("click", () => {
    if (document.querySelector(".selected")) return;

    option.classList.add("selected");

    const selectedAns = option.innerText;
    const correctAns = questions[currentQuesIndex].answer;
    if (selectedAns === correctAns) {
      option.style.background = "green";
      score++;
    } else {
      option.style.background = "red";

      ansDiv.forEach((opt) => {
        if (opt.innerText === correctAns) {
          opt.style.background = "green";
        }
      });
    }
  });
});

//Score 
function showScore(){
  quizContainer.innerHTML=`<h1>Quiz Completed!</h1>
    <hr class="line" />
    <h2>Your Score: ${score} / ${questions.length}</h2>
    <p>Thanks for playing 😊</p>`
}
//reset options
function resetOptions() {
  ansDiv.forEach((opt) => {
    opt.classList.remove("selected");
    opt.style.background = "white";
  });
}

//Finally nextButton event
  const nextBtn = document.getElementById("nextBtn");
  nextBtn.addEventListener("click", ()=>{
  if(!document.querySelector(".selected")){
    alert("Chee Gawar!!")
    return
  }
currentQuesIndex++
  if(currentQuesIndex  < questions.length){
    resetOptions()
    showQuestion(currentQuesIndex)
  }
  else{
    showScore()
  }
})
showQuestion(currentQuesIndex)