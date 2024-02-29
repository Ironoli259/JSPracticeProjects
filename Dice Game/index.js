addEventListener("DOMContentLoaded", (event) => {
    let diceimages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
    
    let dice1 = Math.floor(Math.random() * 6) +1;
    let dice2 = Math.floor(Math.random() * 6) +1;

    let winner = "Draw";

    document.querySelector(".img1").setAttribute("src", "images/" + diceimages[dice1-1]);
    document.querySelector(".img2").setAttribute("src", "images/" + diceimages[dice2-1]);

    if(dice1 > dice2)
        winner = "Player 1 Wins!";    
    else if(dice1 < dice2)
        winner = "Player 2 Wins!";

    document.querySelector("h1").textContent = winner;
});