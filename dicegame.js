let playerOneScore = 0;
let playerTwoScore = 0;

function rollDice(){
 
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var die3 = document.getElementById("die3");
    var die4 = document.getElementById("die4");
    var die5 = document.getElementById("die5");
    var die6 = document.getElementById("die6").innerHTML;

    var status = document.getElementById("status");

    // var d1 = Math.floor(Math.random() * 4) + 1;
    // var d2 = Math.floor(Math.random() * 6) + 1;
    // var d3 = Math.floor(Math.random() * 8) + 1;
    // var d4 = Math.floor(Math.random() * 10) + 1;
    // var d5 = Math.floor(Math.random() * 12) + 1;
    // var d6 = Math.floor(Math.random() * 20) + 1;
    // var diceTotal = d1 + d2 + d3 + d4 + d5 + d6;

    let dropdownValue = document.getElementById("rollDice").value;
    let diceArray = [4, 6, 8, 10, 12, 20];
    let diceTotal = 0;
    let rolls = [];

    for(let i = 0; i < diceArray.length; i++ ) {
        if(/*should still roll*/) { // compare 'i' to 'dropdownValue'
            let roll = Math.floor(Math.random() * diceArray[i]) + 1;
            diceTotal += roll;
            rolls.push(roll);
        }
        else {
            // set die to 0
        }
    }

    die1.innerHTML = d1;
    die2.innerHTML = d2;
    die3.innerHTML = d3;
    die4.innerHTML = d4;
    die5.innerHTML = d5;
    die6.innerHTML = d6;
    status.innerHTML = "You rolled "+diceTotal+".";
    if(d1 == d2 == d3 == d4 == d5 == d6){
        status.innerHTML += " DOUBLES! You get a free turn!!";
    }
}



