var random1 = Math.floor(Math.random()*6)+1;

var RandomImgSource = "images/dice"+ random1 + ".png" ; // images/dice1.png  -  images/dice6.png 

document.querySelectorAll('img')[0].setAttribute("src" , RandomImgSource);  // changing the attribute of the image src.

// for the player 2


var random2 = Math.floor(Math.random()*6)+1;

var RandomImgSrc2 = "images/dice"+random2+".png";

document.querySelectorAll('img')[1].setAttribute("src",RandomImgSrc2);


if(random1>random2){
    document.querySelector('h1').innerHTML = "🚩 Player 1 Wins !!";
}else if(random2>random1){
    document.querySelector('h1').innerHTML = "🚩 Player 2 Wins!";
}

else{
    document.querySelector('h1').innerHTML = "Match Draw !!"
}