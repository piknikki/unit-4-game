


var targetNumber = 53;

$("#number-to-guess").text(targetNumber);

var score = 0;
var numberOptions = [10, 5, 3, 7];

// build a tag for each image, then insert into the div placeholder with id crystals
for (let i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("<img>");  // create a new img tag for each
    imageCrystal.addClass("crystal-image"); // give it a class

    imageCrystal.attr("src", "assets/images/one.png");  // give it a source for an image
    imageCrystal.attr("data-crystalvalue", numberOptions[i]); // give it a new attribute and value
    $("#crystals").append(imageCrystal); // append all of that to the img tag
}

// on clicking the image, it creates a number stored in data-crystalvalue attribute inside the tag
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue); // make the number a string
    score += crystalValue;

    $("#your-score").text(score);



    if (score === targetNumber) {
        alert("you win");
    } else if (score >= targetNumber) {
        alert("you lose");
    }
})

























// var numIndex = numberOptions[i];
// var imageNumberString= "";
//
// if (numIndex === 0) {
//     imageNumberString = "four";
// } else if (numIndex === 1) {
//     imageNumberString = "one";
// } else if (numIndex === 2) {
//     imageNumberString = "two";
// } else if (numIndex === 3) {
//     imageNumberString = "three";
// }
