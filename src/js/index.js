let score = 0;

const displayScore = document.querySelector(".score");

const questionContainerElement = document.getElementById("question-container");

const scoreCard = document.getElementById("scorecard");

let scoreHide = scoreCard;
scoreHide.className = 'hide';

const finishBtn = document.getElementById("finish-btn").addEventListener("click", function(){
    scoreCard.classList = 'reveal'; // This can be anything
});


const questions = [
{
question : "this is a sample",
answers: {
    a: 'HTML', 
    b: 'sample3', 
    c: 'css', 
    d: 'sample3'
},
correct: 'a'
},
{
question : "this is a sample 2",
answers: {
    a: 'sample2',
    b: 'sample2', 
    c: 'sampl', 
    d: 'sample2'
},
correct: 'c'
},
{
question : "this is a sample3",
answers: {
    a: 'sampleb', 
    b: 'samplea',
    c: 'sample1', 
    d: 'samplec'
},
correct: 'd'
},
];

const displayContainer = document.querySelector(".container");

const displayquestions = function(){

    const output = [];

    questions.forEach(
        (item) => {

            const answers = [item.answers];

            for(letter in item.answers){

                answers.push(
                    item.answers//(a, b, c, d)
                )

            }

           output.push(
               ` <div class="question">${item.question}</div>
               <button class="choice-btn">${answers.join('')}</button>`
           )

        }
    );

        displayContainer.innerHTML = output.join('')

};

displayquestions();

/* 
const init = function(questionElement, answerButton){
    questions.forEach((item) =>
        displayContainer.insertAdjacentHTML(
            "afterbegin",
            `<div id="question-container">
                <div class="question">${item.question}</div>
                <div id="answer-buttons" class="btn-grid">
                    <button class="choice-btn">${item.answers[0].text}</button>
                    <button class="choice-btn">${item.answers[1].text}</button>
                    <button class="choice-btn">${item.answers[2].text}</button>
                    <button class="choice-btn">${item.answers[3].text}</button>
                </div>`
    )
    );
    
   /*  const questionElement = document.getElementsByClassName('question');

   const answerButton = document.getElementsByClassName('choice-btn').addEventListener("click", function(){

   });
    };
    
    init();
    
     */
