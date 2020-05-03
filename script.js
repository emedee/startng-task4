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
            if (parameter[i].innerHTML === ("2"||"0"||"1"||"6")){
                console.log("The End")
                buttonNext.innerHTML = "The End!. View Total Score"
            }
            parameter[i].disabled = true
        })
        
    }
}
analyzeResult(1, answerOne, white, answers.one)
analyzeResult(1, answerTwo, whiteTwo, answers.two)
analyzeResult(2, answerThree, whiteThree, answers.three)
analyzeResult(2, answerFour, whiteFour, answers.four)
analyzeResult(3, answerFive, whiteFive, answers.five)

// for(let i = 0; i < answerOne.length; i ++){
//     console.log(answerOne[i]) 
//     answerOne[i].addEventListener('click', ()=>{
//         let correctAnswer = 1
//         if(answerOne[i].innerHTML === '1969'){
//             counter ++
//             scores.innerHTML = counter
//             answerOne[i].style.color = 'white'
//             white[i].style.background = 'green'
//         }else{
//             answerOne[i].style.color = 'white'
//             white[i].style.background = 'red'
//             white[correctAnswer].style.background = 'green'
//             white[correctAnswer].style.color = 'white'
//         }
//     }) 
// }
// for(let j = 0; j < answerTwo.length; j ++){
//     console.log(answerTwo[j]) 
//     answerTwo[j].addEventListener('click', ()=>{
//         let correctAnswer = 1
//         if(answerTwo[j].innerHTML === 'Cristiano Ronaldo'){
//             counter ++
//             scores.innerHTML = counter
//             answerTwo[j].style.color = 'white'
//             whiteTwo[j].style.background = 'green'
//         }else{
//             answerTwo[j].style.color = 'white'
//             whiteTwo[j].style.background = 'red'
//             whiteTwo[correctAnswer].style.background = 'green'
//             whiteTwo[correctAnswer].style.color = 'white'
//         }
//     }) 
// }
// for(let j = 0; j < answerThree.length; j ++){
//     console.log(answerThree[j]) 
//     answerThree[j].addEventListener('click', ()=>{
//         let correctAnswer = 2
//         if(answerThree[j].innerHTML === '1960'){
//             counter ++
//             scores.innerHTML = counter
//             answerThree[j].style.color = 'white'
//             whiteThree[j].style.background = 'green'
//         }else{
//             answerThree[j].style.color = 'white'
//             whiteThree[j].style.background = 'red'
//             whiteThree[correctAnswer].style.background = 'green'
//             whiteThree[correctAnswer].style.color = 'white'
//         }
//     }) 
// }
// for(let j = 0; j < answerFour.length; j ++){
//     console.log(answerFour[j]) 
//     answerFour[j].addEventListener('click', ()=>{
//         let correctAnswer = 2
//         if(answerFour[j].innerHTML === 'Mark Essien'){
//             counter ++
//             scores.innerHTML = counter
//             answerFour[j].style.color = 'white'
//             whiteFour[j].style.background = 'green'
//         }else{
//             answerFour[j].style.color = 'white'
//             whiteFour[j].style.background = 'red'
//             whiteFour[correctAnswer].style.background = 'green'
//             whiteFour[correctAnswer].style.color = 'white'
//         }
//     }) 
// }
// for(let j = 0; j < answerFive.length; j ++){
//     console.log(answerFive[j]) 
//     answerFive[j].addEventListener('click', ()=>{
//         let correctAnswer = 3
//         if(answerFive[j].innerHTML === '2'){
//             counter ++
//             scores.innerHTML = counter
//             answerFive[j].style.color = 'white'
//             whiteFive[j].style.background = 'green'
            
//         }else{
//             answerFive[j].style.color = 'white'
//             whiteFive[j].style.background = 'red'
//             whiteFive[correctAnswer].style.background = 'green'
//             whiteFive[correctAnswer].style.color = 'white'
//         }
//     }) 
// }
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