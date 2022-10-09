var images=document.querySelectorAll("img");
var image1=images[0];
var image2=images[1];

function game(){
var randomnumber1=Math.floor(Math.random()*6+1);
var randomnumber2=Math.floor(Math.random()*6+1);

image1.setAttribute("src","./images/dice"+randomnumber1+".png");
image2.setAttribute("src","./images/dice"+randomnumber2+".png");


if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomnumber1<randomnumber2)
{
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else
{
  document.querySelector("h1").innerHTML="Game Draw";
}

document.querySelector("h1").classList.remove("clicked-btn");
}
document.querySelector("h1").onclick= function(){start()};

function start(){
  image1.setAttribute("src","./dice.gif");
  image2.setAttribute("src","./dice.gif");
  var sound = new Audio("./roll.mp3");
  sound.play();
  sound.play();
  document.querySelector("h1").classList.add("clicked-btn");
  setTimeout(game,1000);
}