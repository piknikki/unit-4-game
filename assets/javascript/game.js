
var started = false;
var targetNumber;
var score = 0;
var numberOptions = [10, 5, 3, 7];
winsCount = 0;
lossesCount = 0;

$(document).keypress(function() {
    if (!started) { // if started is false
        targetNumberMaker();
        $("#level-title").slideUp();
        $("#number-to-guess").text(targetNumber);
        started = true; // change state.  makes sure this happens only on first round
    }
});

function targetNumberMaker() {
    targetNumber = Math.floor(Math.random() * (120-19) + 19);
    return targetNumber;
}

// build a tag for each image, then insert into the div placeholder with id crystals
for (let i = 0; i < numberOptions.length; i++) {
    var numIndex = numberOptions.indexOf(numberOptions[i]);
    console.log(numIndex);
    var imageNumberString= "";

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
    crystalValue = parseInt(crystalValue); // make the number a string
    score += crystalValue;

    $("#your-score").text(score);



    if (score === targetNumber) {
        alert("you win");
        winsCount++;
        $(".wins").text("Wins: " + winsCount);
        score = 0;
        $("#your-score").text(score);
        targetNumberMaker();
        $("#number-to-guess").text(targetNumber);
    } else if (score >= targetNumber) {
        alert("you lose");
        lossesCount++;
        $(".losses").text("Losses: " + lossesCount);
        score = 0;
        $("#your-score").text(score);
        targetNumberMaker();
        $("#number-to-guess").text(targetNumber);
    }


})



























