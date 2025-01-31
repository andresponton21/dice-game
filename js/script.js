// This function returns a random Number between 1 (inclusive) and the argument passed to the function
// If no argument is passed, 6 is set, ie, returns a number between and including 1 to 6
// 		For example: 
//    getRandomDiceRoll() will return either 1, 2, 3, 4, 5, 6
const getRandomDiceRoll = function(sides=6) {
  return Math.floor( Math.random() * sides ) + 1
}

// Here's a test roll, check the console!
console.log(getRandomDiceRoll())

// 1) Call getRandomDiceRoll() and store the result as a variable named "diceRoll"
const diceface = document.querySelector('.diceface')
const roll = document.querySelector(`.roll`)
const rollnum = document.querySelector(`.rollnum`)

// 2) Update user interface (document), showing the diceface (svg image) that matches the roll number
const rollTheDice = () => {
const diceRoll = getRandomDiceRoll()
diceface.setAttribute(`src`, `../img/dice${diceRoll}.svg`)
rollnum.textContent=diceRoll

  
}

roll.addEventListener( `click`, rollTheDice)

// 3) Use `diceRoll` to update the label "You rolled: #" (replacing # with the roll)

// 4) Wrap the dice roll procedure in a function named rollTheDice(), call it from the console to test
