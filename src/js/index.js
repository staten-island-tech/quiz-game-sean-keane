DOMSelectors = {
    displayContainer: document.querySelector(".container"),
    displayScore: document.querySelector(".score"),

    //correctChoiceButtons: document.getElementById(".choice-btn").addEventListener("click"),

    // NOT WORKING

    finishBtn: document.querySelector ("hide"),

    scoreCard: document.getElementById ("#scorecard"),

    finishBtn: document.getElementById("finish-btn").addEventListener('click', () => {
        hide.classList.toggle('reveal');
     }),



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
    {text: 'sampl', correct: false},
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
                <button id="choice-btn">${item.answers[3].text}</button>
            </div>`
)
);
};

init(); 



let initialScore = 0;

function scoreLog(e) {
 if (e.target.id === questions.answers.correct(true)){
     initialScore ++
 }
};

