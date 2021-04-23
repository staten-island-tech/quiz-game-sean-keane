DOMSelectors = {
    displayContainer: document.querySelector(".container"),
    displayScore: document.querySelector(".score"),

<<<<<<< Updated upstream
    //correctChoiceButtons: init.getElementById(".choice-btn").addEventListener("click", scoreLog),

    // NOT WORKING

    //scoreCard: document.getElementById(".scorecard").addEventListener(displayScore),

    //finishButton: document.getElementById ("finish-btn").addEventListener("click", displayScore),
=======
    //correctChoiceButtons: document.getElementById(".choice-btn").addEventListener("click"),

    // NOT WORKING

    finishBtn: document.querySelector ("hide"),

    scoreCard: document.getElementById ("scorecard"),

    finishBtn: document.querySelector ("finish-btn"),//.addEventListener("click", displayScore),
>>>>>>> Stashed changes
};

const questions = [
{
question : "this is a sample",
answers: [
    {text: 'HTML', correct: false},
    {text: 'sample3', correct: false},
    {text: 'css', correct: true},
    {text: 'sample3', correct: false},
],
},
{
question : "this is a sample 2",
answers: [
    {text: 'sample2', correct: true},
    {text: 'sample2', correct: false},
    {text: 'sample2', correct: false},
    {text: 'sample2', correct: false},
],
},
{
question : "this is a sample3",
answers: [
    {text: 'sampleb', correct: false},
    {text: 'samplea', correct: false},
    {text: 'sample1', correct: false},
    {text: 'samplec', correct: true},
],
},
];

const init = function(){
questions.forEach((item) =>
DOMSelectors.displayContainer.insertAdjacentHTML(
        "beforeend",
        `<div id="question-container">
            <div id="question">${item.question}</div>
            <div id="answer-buttons" class="btn-grid">
                <button id="choice-btn">${item.answers[0].text}</button>
                <button id="choice-btn">${item.answers[1].text}</button>
                <button id="choice-btn">${item.answers[2].text}</button>
                <button id="choice-btn">${item.answers[1].text}</button>
            </div>`
)
);
};

init(); 


let initialScore = 0;

<<<<<<< Updated upstream
function scoreLog(e) {
 if (e.target.id === questions.answers.correct(true)){
=======
function scoreLog(answers) {
 if (answers.target.id === questions.answers.correct){
>>>>>>> Stashed changes
     initialScore ++
 }
} 

<<<<<<< Updated upstream
function displayScore() {
    scoreCard.style.display = "Block";
    scoreLog {

    }
}
=======

  DOMSelectors.finishBtn.addEventListener("click", () => {
   DOMSelectors.hide.classList.remove("hide");
}); 
>>>>>>> Stashed changes
