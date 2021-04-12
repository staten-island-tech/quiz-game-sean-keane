DOMSelectors = {
    displayContainer: document.querySelector(".container"),
};

const questions = [
{
question : "this is a sample",
answers: [
    {text: 'sample1', correct: true},
    {text: 'sample1', correct: false},
    {text: 'sample1', correct: false},
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
    {text: 'sample3', correct: true},
    {text: 'sample3', correct: false},
    {text: 'sample3', correct: false},
    {text: 'sample3', correct: false},
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
                <button class="btn">${item.answers.text}</button>
                <button class="btn">${item.answers.text}</button>
                <button class="btn">${item.answers.text}</button>
                <button class="btn">${item.answers.text}</button>
            </div>`
)
);
};

init(); 