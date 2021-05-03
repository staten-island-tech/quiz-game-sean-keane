    let score = 0;
    
    const displayContainer = document.querySelector(".container");

    const displayScore = document.querySelector(".score");

    const questionContainerElement = document.getElementById("question-container");

    const questionElement = document.getElementById('question');

    const answerButton1 = document.getElementById("choice-btn1");
    const answerButton2 = document.getElementById("choice-btn2");
    const answerButton3 = document.getElementById("choice-btn3");
    const answerButton4 = document.getElementById("choice-btn4");

    const scoreCard = document.getElementById("scorecard");

    let scoreHide = scoreCard;
    scoreHide.className = 'hide';

    const finishBtn = document.getElementById("finish-btn").addEventListener("click", function(){
        scoreCard.classList = 'visible';
    });

    function init(){
        let q = questions;
        questionElement.innerHTML = q.question;
        answerButton1.innerHTML = q.answers.text[1];
        answerButton2.innerHTML = q.answers.text[2];
        answerButton3.innerHTML = q.answers.text[3];
        answerButton4.innerHTML = q.answers.text[4];
    }

    /* function answerLog(e) {
        if (e.target.)
    } */


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

/* function displayQuestions(q){
    let q = questions;
    questionElement.innerHTML = <h1> + q.question + </h1>
} */



 /* const init = function(){
questions.forEach((item) =>
displayContainer.insertAdjacentHTML(
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

init(); */

const questionAnswerLog = questions.findIndex(questions => questions.answers === true);

// NOT WORKING





