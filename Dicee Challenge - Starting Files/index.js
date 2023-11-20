window.onload = function() {
    var randomNumber = Math.floor(Math.random() * 6 ) + 1 ;
    var randomDiceImg = "dice" + randomNumber + ".png";
    var randomImgSource = "images/" + randomDiceImg; 
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImgSource);
    console.log(randomImgSource);


    var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
    var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";

    var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2); 

    if(randomNumber > randomNumber2 ) {
        document.querySelector('h1').innerHTML = "🚩Player 1 wins !";
    } else if (randomNumber2 > randomNumber){
        document.querySelector('h1').innerHTML = "🚩Player 2 wins !";
    } else {
        document.querySelector('h1').innerHTML = "Draw !!!";
    };
};


