
const displayContainer = document.querySelector(".container");

const questionContainerElement = document.getElementById("question-container");

const scoreCard = document.getElementById("scorecard");

let scoreHide = scoreCard;
scoreHide.className = 'hide';

 const submitButton = document.getElementById("finish-btn").addEventListener("click", showResults);


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

const displayquestions = function(){

    const output = [];

    questions.forEach(
        (item, itemNumber) => {

         const answers = [];

          for(letter in item.answers){

                answers.push(
                    `<label>
              <input type="radio" name="question${itemNumber}" value="${letter}">
              ${letter} :
              ${item.answers[letter]}
            </label>`
                )

            }

           output.push(
               ` <div class="question">${item.question}</div>
               <button class="choice-btn">${answers.join('')}</button>`
           );

        }
    );

        displayContainer.innerHTML = output.join('');

};


function showResults(){

    // gets answer containers from quiz
    const answerContainers = displayContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    
    questions.forEach( (item, itemNumber) => {

      // find selected answer
      const answerContainer = answerContainers[itemNumber];
      const selector = `input[name=question${itemNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === item.correct){
        numCorrect++;
      }
    });

    // show number of correct answers out of total
    scoreCard.innerHTML = `${numCorrect} out of ${questions.length}`;

    scoreCard.classList = 'reveal';
  };


displayquestions();

