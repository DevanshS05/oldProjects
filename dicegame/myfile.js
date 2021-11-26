function rollDice() {
  var temp = Math.floor(Math.random() * 6) + 1;
  console.log(temp);
  return temp;
}

function numToWords(num) {
  if (num == 1) {
    return "one";
  } else if (num == 2) {
    return "two";
  } else if (num == 3) {
    return "three";
  } else if (num == 4) {
    return "four";
  } else if (num == 5) {
    return "five";
  } else if (num == 6) {
    return "six";
  }
}

function startGame() {
  var textStatus = "";
  var var1 = rollDice();
  var var2 = rollDice();
  //Declaring respective objects
  var diceobj1 = document.getElementById("dice1");
  var diceobj2 = document.getElementById("dice2");
  var myobj = document.getElementById("heading");

  if (var1 > var2) {
    console.log("Player 1 has won!");
    textStatus = "Player 1 has won";
    diceobj1.style.color = "green";
    diceobj2.style.color = "red";
  }
  else if (var1 < var2) {
    console.log("Player 2 has won!");
    textStatus = "Player 2 has won";
    diceobj1.style.color = "red";
    diceobj2.style.color = "green";
  }
  else {
    console.log("It is a tie!");
    textStatus = "It is a tie!";
    diceobj1.style.color = "orange";
    diceobj2.style.color = "orange";
  }
  //Setting heading about who won the competition
  myobj.textContent = textStatus;

  //Changing the respective dice icons

  diceobj1.classList.remove("fa-dice-six");
  diceobj1.classList.add("fa-dice-" + numToWords(var1));
  diceobj2.classList.remove("fa-dice-six");
  diceobj2.classList.add("fa-dice-" + numToWords(var2));
}

function resetGame() {
  //Setting heading about who won the competition
  var myobj = document.getElementById("heading");
  myobj.textContent = "Dice Game";

  //Changing the respective dice icons
  var diceobj1 = document.getElementById("dice1");
  var diceobj2 = document.getElementById("dice2");
  diceobj1.className = "fas fa-dice-six fa-6x";
  diceobj2.className = "fas fa-dice-six fa-6x";
  diceobj1.style.color = "black";
  diceobj2.style.color = "black";

}
