DOMSelectors = {
    displayContainer: document.querySelector(".container"),
    scoreCard: document.querySelector(".scorecard"),
    finishButton: document.getElementById ("finish-btn").addEventListener("click", displayScore),
    buttonLog: document.querySelector(".choice-btn"),
    
    //correctChoiceButtons: document.getElementById(".choice-btn1", ".choice-btn2", ".choice-btn3", ".choice-btn4").addEventListener("click", newScore),
};

let score = 0;

const questions = [
{
question : "this is a sample 4",
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
question : "this is a sample 3",
answers: {
    text1: 'HTML', 
    text2: 'sample2', 
    text3: 'gibbons',
    text4: 'sample2', 
},
correctChoice: 'text4',

},
{
question : "this is a sample2",
answers: {
    text1: 'HTML', 
    text2: 'sample1', 
    text3: 'gibbons',
    text4: 'sample1', 
},
correctChoice: 'text1',

},
{
question : "this is a sample",
answers: {
    text1: 'HTML', 
    text2: 'sample1', 
    text3: 'gibbons',
    text4: 'sample1', 
    },
correctChoice: 'text3',
    
},
];

const init = function() {

    

    questions.forEach((item) =>
    DOMSelectors.displayContainer.insertAdjacentHTML(
        "afterbegin",
        `<div id="question-container">
            <div id="question">${item.question}</div>
            <div id="answer-buttons" class="btn-grid">
                <button id="choice-btn">${item.answers.text1}</button>
                <button id="choice-btn">${item.answers.text2}</button>
                <button id="choice-btn">${item.answers.text3}</button>
                <button id="choice-btn">${item.answers.text4}</button>
            </div>`
      ),
    );
};

function newScore(item) {
    if (item.target.id === questions.correctChoice) {
        score + 1;
    };

    return newScore
}

 function displayScore() {

document.getElementById("score").innerHTML = "pog"

}; 

init();