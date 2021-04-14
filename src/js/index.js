DOMSelectors = {
    displayContainer: document.querySelector(".container"),
    finishButton: document.querySelector (".finish-btn"),
    scoreCard: document.querySelector(".scorecard"),
    btn: document.querySelector(".btn"),
};

const questions = [
{
question : "this is a sample 3",
answers: 
    {
    text1: 'HTML', 
    text2: 'sample3', 
    text3: 'gibbons',
    text4: 'sample3', 
},
correctChoice: 'text2',

},
{
question : "this is a sample 2",
answers: {
    text1: 'HTML', 
    text2: 'sample2', 
    text3: 'gibbons',
    text4: 'sample2', 
},
correctChoice: 'text4',

},
{
    {text: 'sample1', correct: false},
question : "this is a sample",
answers: {
    text1: 'HTML', 
    text2: 'sample1', 
    text3: 'gibbons',
    text4: 'sample1', 
},
correctChoice: 'text1',

},
];

let scoreCard = document.getElementById(".scorecard");

const init = function(scoreCard){

questions.forEach((item) =>
    DOMSelectors.displayContainer.insertAdjacentHTML(
        "afterbegin",
        `<div id="question-container">
            <div id="question">${item.question}</div>
            <div id="answer-buttons" class="btn-grid">
                <button class="btn">${item.answers.text1}</button>
                <button class="btn">${item.answers.text2}</button>
                <button class="btn">${item.answers.text3}</button>
                <button class="btn">${item.answers.text4}</button>
            </div>`
),
),

//console.log(scoreCard),

scoreCard.classList.style.visibility = "hidden";

}; 

/* This inserts the objects and arrays into the HTML */

init(); 

//btn.addEventListener('click');

 /* const displayScore = function(){
    const correctAnswerLog = [i++];
    const answers = [4];

    for(const i=0; i<questions.length; i){
        answers = [];
    };

    output.push (
    questions.forEach((answer) => DOMSelectors.scoreCard.insertAdjacentHTML(`<div class="score">${answers.join('')}/3</div>`)
    ),



};

function showResult(btn){

} */
