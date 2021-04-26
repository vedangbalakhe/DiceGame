
var randomNumber=Math.floor(Math.random()*6)+1;

var randomImage="images/dice"+randomNumber+".png";

var imgg=document.querySelectorAll("img")[0];

imgg.setAttribute("src",randomImage);


var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImage="images/dice"+randomNumber2+".png";

var imgg=document.querySelectorAll("img")[1];

imgg.setAttribute("src",randomImage);

if(randomNumber>randomNumber2)
{
  document.querySelector("#res").innerHTML="🚩 Player 1 Wins";
}
else if(randomNumber<randomNumber2)
{
  document.querySelector("#res").innerHTML="Player 2 Wins 🚩";
}
else
{
  document.querySelector("#res").innerHTML="Its a tie";
}
