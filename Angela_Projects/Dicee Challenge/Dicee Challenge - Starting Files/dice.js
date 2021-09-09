var randomNumber1=Math.floor(Math.random()*6)+1;
if(randomNumber1==1){
    document.getElementById("dice1").setAttribute("src","images/dice1.png");
}
else if(randomNumber1==2){
    document.getElementById("dice1").setAttribute("src","images/dice2.png");
}
else if(randomNumber1==3){
    document.getElementById("dice1").setAttribute("src","images/dice3.png");
}else if(randomNumber1===4){
    document.getElementById("dice1").setAttribute("src","images/dice4.png");
}else if(randomNumber1===5){
    document.getElementById("dice1").setAttribute("src","images/dice5.png");
}else{
    document.getElementById("dice1").setAttribute("src","images/dice6.png");
}




var randomNumber2=Math.floor(Math.random()*6)+1;
if(randomNumber2==1){
    document.getElementById("dice2").setAttribute("src","images/dice1.png");
}
else if(randomNumber2==2){
    document.getElementById("dice2").setAttribute("src","images/dice2.png");
}
else if(randomNumber2==3){
    document.getElementById("dice2").setAttribute("src","images/dice3.png");
}else if(randomNumber2===4){
    document.getElementById("dice2").setAttribute("src","images/dice4.png");
}else if(randomNumber2===5){
    document.getElementById("dice2").setAttribute("src","images/dice5.png");
}else{
    document.getElementById("dice2").setAttribute("src","images/dice6.png");
}
if(randomNumber1>randomNumber2){
    document.getElementById("player_win").innerHTML="<h1 style='display: inline'>&nbsp;Player 1 wins!</h1>";
}else if(randomNumber2==randomNumber1)
{
    document.getElementById("player_win").textContent="Draw!";
}else{
    document.getElementById("player_win").innerHTML="<h1 style='display: inline'>Player 2 wins!</h1>";
}