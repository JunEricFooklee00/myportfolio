
let cards = [0]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let player = {
namep: "Eric",
chips:  567
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.namep + ": $" + player.chips

console.log(cards)

function getRandomCard(){
    
    randomNum = Math.floor(Math.random()*13) + 1
    if (randomNum>10) {
        return 10
        
    }else if (randomNum === 1){
        return 11
    }
   return randomNum

}


function startGame(){
    isAlive = true
    let firstNum = getRandomCard()
    let secondNum = getRandomCard()
    cards = [firstNum, secondNum]
    sum = firstNum + secondNum

    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards:" 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
        
    }
    
    sumEl.textContent = "Sum: " + sum


if (sum <= 20){
    message = "Do you want to draw another card?"
    
} else if (sum === 21){
    message = "BlackJack"
   
    hasBlackJack = true
}else{
    message = "You Lose!"
   
    isAlive = false
}
console.log(message)
messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackJack ===  false) {
    let Newcard = getRandomCard()
    sum +=Newcard
    cards.push(Newcard) 
    renderGame()
}
}

















// let age = 123
// if (age == 100){
//     console.log("malaki tite")
// } else if (age < 100) {
//     console.log("Supot ka pa Boii")
// } else{
//     console.log("wahhhahaha amats amp")
// }



















//if else prac
// let age = 12

// if (age <= 21) {
//     console.log("Bwal idol, patuli ka muna")
// } else {
//     console.log("Welcome, alam na mamaya ah")
// }











// Blackjack if elseif consitional statement
// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard
// console.log(sum)

// if (sum < 21) {
//     console.log("Do u want to draw a new card")
// } else if (sum === 21) {
//     console.log("Yabang ampota")
// } else if (sum>21) {
//     console.log("uwi ka na idol")
// }




























// CALCULATOR
// let num1 = 11
// let num2 = 2
// document.getElementById("num1-el").textContent = num1 
// document.getElementById("num2-el").textContent = num2
// let sumAns = document.getElementById("sum-ans")
// let subAns = document.getElementById("sub-ans")
// let divAns = document.getElementById("div-ans")
// let mulAns = document.getElementById("mul-ans")

// function add(){
//     sumAns.textContent =  num1 + num2

// }

// function subtract(){
//     subAns.textContent = num1 - num2
    
// }

// function divide(){
//     divAns.textContent = num1 / num2
    
// }

// function multiply(){
//     mulAns.textContent = num1 * num2
    
// }









// Error Handler with html
// let errorHandler = document.getElementById("error")



// function purchClick(){
//     console.log("andkjansdkj")
//     errorHandler.textContent = "Something went wrong, Please try again later"

    

// }
















//===================================
// increment and decrement
// let myPoints = 3
// function add3Points(){
//     myPoints +=3
   

// }


// function remove1Point(){
//     myPoints = myPoints - 1

// }

// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// console.log(myPoints)