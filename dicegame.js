function dice()
{
  var num=Math.floor(Math.random()*5+1);
  return num;
}
function throws(arg)
{
  tt=document.frm.sel.value;
  if(tt=="ONE")
  {
    document.getElementById("im1").style.visibility="visible";
    document.getElementById("im2").style.visibility="hidden";
    document.getElementById("im3").style.display="none";
   if(arg=="rot")
   {
     document.frm.dimg1.src="./images/dice.gif";
   }else{
     document.frm.dimg1.src="./images/dice"+dice()+".gif";
   }
 }else if(tt=="TWO")
 {
    document.getElementById("im1").style.visibility="visible";
    document.getElementById("im2").style.visibility="visible";
    document.getElementById("im3").style.display="none";
    if(arg=="rot")
    {
      document.frm.dimg1.src="hthrow-dice/images/dice.gif";
      document.frm.dimg2.src="hthrow-dice/images/dice.gif";

    }else{
      document.frm.dimg1.src="hthrow-dice/images/dice"+dice()+".gif";
      document.frm.dimg2.src="hthrow-dice/images/dice"+dice()+".gif";
    }
  }else{
    document.getElementById("im1").style.visibility="visible";
    document.getElementById("im2").style.visibility="visible";
    document.getElementById("im3").style.display="block";
    if(arg=="rot")
    {
      document.frm.dimg1.src="hthrow-dice/images/dice.gif";
      document.frm.dimg2.src="hthrow-dice/images/dice.gif";
      document.frm.dimg3.src="hthrow-dice/images/dice.gif";
    }else{
     document.frm.dimg1.src="hthrow-dice/images/dice"+dice()+".gif";
     document.frm.dimg2.src="hthrow-dice/images/dice"+dice()+".gif";
     document.frm.dimg3.src="hthrow-dice/images/dice"+dice()+".gif";
   }
  }
}
//function startGame() {
    myGameArea.start();
}
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 500;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}\\