
var counter = 0;
var targetNumber = 55;

$("#number-to-guess").text(targetNumber);

var numberOptions = [10, 5, 3, 7];


$(".crystal-one").on("click", function() {
    score += 8;
    if (score === targetNumber) {
        targetNumberGenerator();
        alert("Yay, you win!!");
    } else if (score > targetNumber) {
        targetNumberGenerator();
        score = 0;
        alert("Sorry, you went over");
    }
    $("#score").text(score);
})

$(".crystal-two").on("click", function() {
    score += 13;
    if (score === targetNumber) {
        targetNumberGenerator();
        alert("Yay, you win!!");
    } else if (score > targetNumber) {
        targetNumberGenerator();
        score = 0;
        alert("Sorry, you went over");
    }
    $("#score").text(score);
})

$(".crystal-three").on("click", function() {
    score += 2;
    if (score === targetNumber) {
        targetNumberGenerator();
        alert("Yay, you win!!");
    } else if (score > targetNumber) {
        targetNumberGenerator();
        score = 0;
        alert("Sorry, you went over");
    }
    $("#score").text(score);
})

$(".crystal-four").on("click", function() {
    score += 19;
    if (score === targetNumber) {
        targetNumberGenerator();
        alert("Yay, you win!!");
    } else if (score > targetNumber) {
        targetNumberGenerator();
        score = 0;
        alert("Sorry, you went over");
    }
    $("#score").text(score);
})





