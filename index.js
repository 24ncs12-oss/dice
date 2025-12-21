
var randomNumber1 = Math.floor(Math.random() * 6) + 1 // 1-6

var randomDiceImage = "d" + randomNumber1 + ".png";//d1.png-d6.png

var randomImageSource = "images/" + randomDiceImage;//images/d1.png -d2.png

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/d" +randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 win!"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 win"
}   
else{
    document.querySelector("h1").innerHTML="draw"
}