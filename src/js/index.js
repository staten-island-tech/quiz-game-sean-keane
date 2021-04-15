DOMSelectors = {
    displayContainer: document.querySelector(".container"),
    scoreCard: document.querySelector(".scorecard"),
    finishButton: document.getElementById ("finish-btn").addEventListener("click", displayScore),
    buttonLog: document.querySelector(".choice-btn"),
    
    //correctChoiceButtons: document.getElementById(".choice-btn1", ".choice-btn2", ".choice-btn3", ".choice-btn4").addEventListener("click", newScore),
};

const questions = [
{
question : "this is a sample",
answers: [
    {text: 'HTML', correct: false},
    {text: 'sample1', correct: false},
    {text: 'sample1', correct: true},
    {text: 'sample1', correct: false},
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
question : "this is a sample 3",
answers: [
    {text: 'sample3', correct: false},
    {text: 'sample3', correct: false},
    {text: 'sample3', correct: false},
    {text: 'sample3', correct: true},
],
},
];

const init = function(){
questions.forEach((item) =>
    DOMSelectors.displayContainer.insertAdjacentHTML(
        "afterbegin",
        `<div id="question-container">
            <div id="question">${item.question}</div>
            <div id="answer-buttons" class="btn-grid">
                <button class="btn">${item.answers}</button>
                <button class="btn">${item.answers}</button>
                <button class="btn">${item.answers}</button>
                <button class="btn">${item.answers}</button>
            </div>`
)
);
};

init(); 


function newScore(item) {
    if (item === questions.correctChoice) {
        score + 1;
    };

    return newScore
}

 function displayScore() {

document.getElementById("score").innerHTML = "pog"

}; 

init();