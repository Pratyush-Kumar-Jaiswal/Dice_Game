var randomno1=Math.floor(Math.random()*6+1);
var randomdiceimage1="dice"+randomno1+".png";
var imagesrc1="images/"+randomdiceimage1;


var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",imagesrc1);


var randomno2=Math.floor(Math.random()*6+1);
var randomdiceimage2="dice"+randomno2+".png";
var imagesrc2="images/"+randomdiceimage2;


var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",imagesrc2);

if(randomno1>randomno2){
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if (randomno1<randomno2) {
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
