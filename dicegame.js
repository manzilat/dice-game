


function rollDice(){
 
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var die3 = document.getElementById("die3");
    var die4 = document.getElementById("die4");
    var die5 = document.getElementById("die5");
    var die6 = document.getElementById("die6");

    var status = document.getElementById("status");

     var d1 = Math.floor(Math.random() * 4) + 1
     var d2 = Math.floor(Math.random() * 6) + 1;
     var d3 = Math.floor(Math.random() * 8) + 1;
     var d4 = Math.floor(Math.random() * 10) + 1;
     var d5 = Math.floor(Math.random() * 12) + 1;
     var d6 = Math.floor(Math.random() * 20) + 1;


     console.log("**************************************************************************")
     console.log("NUMBERS ON PREVIOUS DICE WAS");
     console.log('die1.innerHTML before',die1.innerHTML);
     console.log('die2.innerHtml before',die2.innerHTML);
     console.log('die3.innerHTML before',die3.innerHTML);
     console.log('die4.innerHtml before',die4.innerHTML)
     console.log('die5.innerHTML before',die5.innerHTML);
     console.log('die6.innerHtml before',die6.innerHTML);
     
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    die3.innerHTML = d3;
    die4.innerHTML = d4;
    die5.innerHTML = d5;
    die6.innerHTML = d6;
    let rollResults = [d1, d2, d3, d4, d5, d6];
    console.log("number on dice are ",rollResults );
    console.log("END OF YOU'RE TURN");
    console.log('your current score is',checkForTenPoints(rollResults));
    
    console.log("**************************************************************************")
   
    let rollOneResult = document.getElementById("die1"&&"die2");
   
    function previousScore(previousScore,rollResult){
        let result;
        result=previousScore+rollResult;
        return result;
        console.log(result)
        
    }
    
   
let score=checkForTenPoints(rollResults);
// console.log('SCORE', score);





   
    if(d1 == d3 && d1 == d5 || d2 == d4 && d2 == d6){

        status.innerHTML += " You get a free turn!!";
    }
   
    
}

