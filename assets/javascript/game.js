// ----- Game Variables ----- //

// Initial array of animals
var animalsArr = ["fox", "cat", "pig", "tiger", "cheetah",
                  "giraffe", "hedgehog", "skunk", "guinea pig", "lizard",
                  "goat", "horse", "cow", "alligator", "kangaroo",
                  "panda", "koala", "deer", "elephant", "racoon", "squirrel"];

// ----- Helper Functions ----- //

// renderButtons will display the animal buttons for all animals within the
// animalsArr array.
function renderButtons() {
  // Empty the buttons panel before redrawing it
  $("#buttonPanel").empty();

  // Loop through the array of animals
  for (var i = 0; i < animalsArr.length; i++) {
    // Dynamicaly generate a button for each animal in the array
    var button = $("<button>");
    button.addClass("animalButton");
    button.attr("data-animal", animalsArr[i]);
    button.text(animalsArr[i]);

    // Add the button to the HTML
    $("#buttonPanel").append(button);
  }
}

// ----- Main Game Routine ----- //

$(document).ready(function() {

  // Display the intial animal buttons
  renderButtons();

}); // main game routine