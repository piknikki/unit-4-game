
var started = false;

var score = 0;
var targetNumber = "";

function targetNumberGenerator() {
    targetNumber = Math.ceil(Math.random() * 120);
    return targetNumber;
}
targetNumberGenerator();


$("#number-to-guess").text(targetNumber);

// when any key is pressed, start level and call nextSequence, change state to started
$(document).keypress(function() {
    if (!started) { // if started is false
        $("#level-title").text("Number to guess: " + targetNumber); // change text and call gameSequence
        gameSequence();
        started = true; // change state.  makes sure this happens only on first round
    }
});


// when button is clicked keep track of user picks, play sound and flash animation, then check if same number as
$(".btn").click(function() {
    // log a value for the button

    var userChoice = $(this).attr("name"); // stores name of button that was clicked


    playSound(userChoice); // plays when button clicked
    animatePress(userChoice); // flash when button clicked

    checkAnswer(userChoice);
});


function checkAnswer(userChoice) {
    if (score === targetNumber) {
        // you win
        console.log("correct");
    } else {

        // you lose
        console.log("wrong");
        playSound("wrong"); // use the function instead of repeating the code



    };

}

function gameSequence() {
    // user picks a gem and
    $("#level-title").text("Number to guess: " + targetNumber);
    $("#title").text("Your score so far: " + score);


}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
};





function startOver() {

    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
    started = false;
}
