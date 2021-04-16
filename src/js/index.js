DOMSelectors = {
    displayContainer: document.querySelector(".container"),

    correctChoiceButtons: document.getElementById(".choice-btn1").addEventListener("click", scoreLog),
    correctChoiceButtons: document.getElementById(".choice-btn1").addEventListener("click", scoreLog),
    correctChoiceButtons: document.getElementById(".choice-btn1").addEventListener("click", scoreLog),

    // NOT WORKING

    scoreCard: document.getElementById(".scorecard"),

    finishButton: document.getElementById ("finish-btn").addEventListener("click", displayScore),
};

const questions = [
{
question : "this is a sample3",
answers: [
    {text1: 'HTML', correct: false},
    {text2: 'sample3', correct: false},
    {text3: 'css', correct: true},
    {text4: 'sample3', correct: false},
],
},
{
question : "this is a sample 2",
answers: [
    {text1: 'sample2', correct: true},
    {text2: 'sample2', correct: false},
    {text3: 'sample2', correct: false},
    {text4: 'sample2', correct: false},
],
},
{
question : "this is a sample",
answers: [
    {text1: 'sampleb', correct: false},
    {text2: 'samplea', correct: false},
    {text3: 'sample1', correct: false},
    {text4: 'samplec', correct: true},
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
                <button id="choice-btn">${item.answers[0].text1}</button>
                <button id="choice-btn">${item.answers[1].text2}</button>
                <button id="choice-btn">${item.answers[2].text3}</button>
                <button id="choice-btn">${item.answers[3].text4}</button>
            </div>`
)
);
};

init(); 

let initialScore = 0;

function scoreLog(e) {
 if (e.target.id === questions.answers.correct){
     initialScore ++
 }
} 

function displayScore() {
    scoreCard.style.display = "Block";
}
