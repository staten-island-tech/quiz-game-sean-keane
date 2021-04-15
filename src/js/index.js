const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons'),

<<<<<<< HEAD
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
=======
function showQuestion(){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
        
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })   
 }
        
 function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
>>>>>>> b17d8333e515c657a82f12ea3b62f8aa3f454091

  const questions = [
    {
    question : "this is a sample 4",
    answers: [
        
        {text1: 'HTML', correct: false},
        {text2: 'sample3', correct: false},
        {text3: 'gibbons', correct: true},
        {text4: 'sample3', correct: false},
    
      ]
    },
    {
    question : "this is a sample 3",
    answers: [
        
        {text1: 'HTML', correct: false},
        {text2: 'sample2', correct: true},
        {text3: 'gibbons', correct: false},
        {text4: 'sample2', correct: false},
        
      ]
    },
    {
    question : "this is a sample2",
    answers: [
        
        {text1: 'HTML', correct: true},
        {text2: 'sample1', correct: false},
        {text3: 'gibbons', correct: false},
        {text4: 'sample1', correct: false},
      ]
    },
    {
    question : "this is a sample",
    answers: [
        
        {text1: 'HTML', correct: true},
        {text2: 'sample1', correct: false},
        {text3: 'gibbons', correct: false},
        {text4: 'sample1', correct: false},
    
      ]
    },
    ];