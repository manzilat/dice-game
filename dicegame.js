


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
    console.log('die1.innerHTML after',die1.innerHTML);
    console.log('die2.innerHtml  after',die2.innerHTML);
    console.log('die3.innerHTML  after',die3.innerHTML);
    console.log('die4.innerHtml  after',die4.innerHTML)
    console.log('die5.innerHTML  after',die5.innerHTML);
    console.log('die6.innerHtml  after',die6.innerHTML);
    console.log("END OF YOU'RE TURN");
   
    let rollOneResult = document.getElementById("die1"&&"die2");
   
    let rollResults = [d1, d2, d3, d4, d5, d6];
    
    function checkForTenPoints(rollResults){
        let numbers;
        numbers=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20;
        let points=0;
    for(let i=0;i>=rollResults.length;i++){
        if(rollResults [i]+1 === rollResults[i] +1|| rollResults[i]-1=== rollResults[i+1] ) {
            points += number;
            status="You scored "+points+".";
        }
        return points;
           console.log("score is ",rollResults );
    }
    status.innerHTML = "You scored "+points+".";
}
let score=checkForTenPoints(d1,d2,d3,d4,d5,d6);

   
    if(d1 == d3 && d1 == d5 || d2 == d4 && d2 == d6){
        status.innerHTML += " You get a free turn!!";
    }
   
    
}

//
function rollDice6(){
    var d7 = Math.floor(Math.random() * 6) + 1;
     var d8 = Math.floor(Math.random() * 6) + 1;
     var d9 = Math.floor(Math.random() * 6) + 1;
     var d10 = Math.floor(Math.random() * 6) + 1;
     var d11 = Math.floor(Math.random() * 6) + 1;
     var d12 = Math.floor(Math.random() * 6) + 1;
     die1.innerHTML = d7;
     die2.innerHTML = d8;
     die3.innerHTML = d9;
     die4.innerHTML = d10;
     die5.innerHTML = d11;
     die6.innerHTML = d12;
     console.log('die7.innerHTML before',die7.innerHTML);
     console.log('die8.innerHtml before',die8.innerHTML);
     console.log('die9.innerHTML before',die9.innerHTML);
     console.log('die10.innerHtml before',die10.innerHTML)
     console.log('die11.innerHTML before',die11.innerHTML);
     console.log('die12.innerHtml before',die12.innerHTML);
    die7.innerHTML = d7;
    die8.innerHTML = d8;
    die9.innerHTML = d9;
    die10.innerHTML = d10;
    die11.innerHTML = d11;
    die12.innerHTML = d12;
    console.log('die7.innerHTML after',die7.innerHTML);
    console.log('die8.innerHtml  after',die8.innerHTML);
    console.log('die9.innerHTML  after',die9.innerHTML);
    console.log('die9.innerHtml  after',die10.innerHTML)
    console.log('die10.innerHTML  after',die11.innerHTML);
    console.log('die11.innerHtml  after',die12.innerHTML); 

}
//
