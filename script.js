var randomnumber1 = Math.random();
randomnumber1 = randomnumber1*6;
randomnumber1 = Math.floor(randomnumber1) + 1;
console.log(randomnumber1);



if (randomnumber1 == 1){
    document.querySelector(".img1").setAttribute("src" , "dice1.png");
};


if (randomnumber1 == 2){
    document.querySelector(".img1").setAttribute("src" , "dice2.png");
};

if (randomnumber1 == 3){
    document.querySelector(".img1").setAttribute("src" , "dice3.png");
};

if (randomnumber1 == 4){
    document.querySelector(".img1").setAttribute("src" , "dice4.png");
};

if (randomnumber1 == 5){
    document.querySelector(".img1").setAttribute("src" , "dice5.png");
};


var randomnumber2 = Math.random();
randomnumber2 = randomnumber2*6;
randomnumber2 = Math.floor(randomnumber2) + 1;
console.log(randomnumber2);



if (randomnumber2 == 1){
    document.querySelector(".img2").setAttribute("src" , "dice1.png");
};


if (randomnumber2 == 2){
    document.querySelector(".img2").setAttribute("src" , "dice2.png");
};

if (randomnumber2 == 3){
    document.querySelector(".img2").setAttribute("src" , "dice3.png");
};

if (randomnumber2 == 4){
    document.querySelector(".img2").setAttribute("src" , "dice4.png");
};

if (randomnumber2 == 5){
    document.querySelector(".img2").setAttribute("src" , "dice5.png");
};

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
};

if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
};

if(randomnumber1 == randomnumber2){
    document.querySelector("h1").innerHTML = "Oops! It's a tie";
};






