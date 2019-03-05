
var started = false;
var targetNumber;
var score = 0;
var numberOptions = [10, 5, 3, 7];
winsCount = 0;
lossesCount = 0;

// begin the game by running the target number maker and changing state. slide away the key to start.
$(document).keypress(function() {
    if (!started) { // if started is false, then do this stuff
        targetNumberMaker();
        $("#level-title").slideUp();
        $("#instructions").slideDown();
        $("#number-to-guess").text(targetNumber);
        started = true; // change state.  makes sure this happens only on first round
        console.log(targetNumber);
        console.log(numberOptions);
    }
});

// make a new target number
function targetNumberMaker() {
    targetNumber = Math.floor(Math.random() * (120-19) + 19);
    return targetNumber;
}

// make a new list of values for the buttons
function numberOptionsMaker() {
    numberOptions = [];
    for (let i = 0; i < 4; i++) {
        number = Math.floor(Math.random() * (12-1) + 1);
        numberOptions.push(number);
    }
    return numberOptions;
}

// reset
function startOver() {
    score = 0;
    $("#your-score").text(score);
    targetNumberMaker();
    $("#number-to-guess").text(targetNumber);
    started = false;
    var newNumberOptions = numberOptionsMaker();

    $(".crystal-image").each(function(i) {
        $(this).attr("data-crystalvalue", newNumberOptions[i]);
    })

    console.log(targetNumber);
    console.log(newNumberOptions);
}


// numberOptionsMaker();

// build a tag for each image, then insert into the div placeholder with id crystals
for (let i = 0; i < numberOptions.length; i++) {
    var numIndex = numberOptions.indexOf(numberOptions[i]);
    var imageNumberString = "";

    if (numIndex === 0) {
        imageNumberString = "four";
    } else if (numIndex === 1) {
        imageNumberString = "one";
    } else if (numIndex === 2) {
        imageNumberString = "two";
    } else if (numIndex === 3) {
        imageNumberString = "three";
    }

    var imageCrystal = $("<img>");  // create a new img tag for each
    imageCrystal.addClass("crystal-image"); // give it a class
    imageCrystal.attr("src", "assets/images/" + imageNumberString + ".png");  // give it a source for an image
    imageCrystal.attr("data-crystalvalue", numberOptions[i]); // give it a new attribute and value
    imageCrystal.attr("data-numbervalue", imageNumberString);
    $("#crystals").append(imageCrystal); // append all of that to the img tag
}


var winsText = $("<h3>");
winsText.addClass("wins");
winsText.text("Wins: ");
$("#stats").append(winsText);

var lossesText = $("<h3>");
lossesText.addClass("losses");
lossesText.text("Losses: ");
$("#stats").append(lossesText);

// on clicking the image, it creates a number stored in data-crystalvalue attribute inside the tag
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    var numberValue = ($(this).attr("data-numbervalue"));
    crystalValue = parseInt(crystalValue); // make the number a string
    score += crystalValue;

    $("#your-score").text(score);

    playSound(numberValue);

    if (score === targetNumber) {
        var audioParty = new Audio("assets/sounds/party.mp3");
        audioParty.play();
        $("#level-title").text("You winner, you!").fadeIn("slow").fadeOut("slow");
        winsCount++;
        $(".wins").text("Wins: " + winsCount);
        startOver();
    } else if (score >= targetNumber) {
        var audioWrong = new Audio("assets/sounds/wrong.mp3");
        audioWrong.play();
        $("#level-title").text("Dang, you lost!").fadeIn("slow").fadeOut("slow");
        lossesCount++;
        $(".losses").text("Losses: " + lossesCount);
        startOver();
    }
})

function playSound(name) {
    var audio = new Audio("assets/sounds/" + name + ".mp3");
    audio.play();
}































