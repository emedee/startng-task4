let questions = document.querySelectorAll(".questionOne")
let answerOne = document.querySelectorAll(".answerOne")
let answerTwo = document.querySelectorAll(".answerTwo")
let answerThree = document.querySelectorAll(".answerThree")
let answerFour = document.querySelectorAll(".answerFour")
let answerFive = document.querySelectorAll(".answerFive")
let white = document.querySelectorAll(".white")
let whiteTwo = document.querySelectorAll(".two")
let whiteThree = document.querySelectorAll(".three")
let whiteFour = document.querySelectorAll(".four")
let whiteFive = document.querySelectorAll(".five")
let scores = document.querySelector(".scores")
let finalScore = document.querySelector(".final-score")
let buttonNext = document.querySelector(".btn")
let buttonScores = document.querySelector(".btn-red")

let counter = 0
let currentlySelected = 0
let answers = {
    one: "1969",
    two: "Cristiano Ronaldo",
    three: "1960",
    four: "Mark Essien",
    five: "2"
}

scores.innerHTML = counter
analyzeResult = (index, parameter, color, correctOption) => {
    for(let i = 0; i < parameter.length; i ++){
        parameter[i].addEventListener('click', ()=>{
            let correctAnswer = index
            if(parameter[i].innerHTML === correctOption){
                counter ++
                scores.innerHTML = counter
                parameter[i].style.color = 'white'
                color[i].style.background = 'green'
            }else{
                parameter[i].style.color = 'white'
                color[i].style.background = 'red'
                color[correctAnswer].style.background = 'green'
                parameter[correctAnswer].style.color = 'white'
            }
            if(currentlySelected+1 === questions.length-1){
                console.log("The End")
                buttonNext.innerHTML = "The End!. View Total Score"
            }
            parameter[i].disabled = true
        })
        
    }
}
analyzeResult(0, answerOne, white, answers.one)
analyzeResult(1, answerTwo, whiteTwo, answers.two)
analyzeResult(2, answerThree, whiteThree, answers.three)
analyzeResult(2, answerFour, whiteFour, answers.four)
analyzeResult(3, answerFive, whiteFive, answers.five)

buttonNext.addEventListener('click', () => {
    questions[currentlySelected].classList.toggle('active');
    currentlySelected++;
    questions[currentlySelected].classList.toggle('active');
    if(currentlySelected + 1 === questions.length){
        buttonNext.disabled = true;
        finalScore.innerHTML = `Your score is ${counter}/5`
        buttonNext.style.display = 'none'
        buttonScores.style.display = 'none'
    }
})