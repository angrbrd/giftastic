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

// ----- Event Handlers ----- //

// An event handler for the user form to add additional animals to the array
$("#add-animal").on("click", function(event) {
  event.preventDefault();

  // Get the input from the textbox
  var animal = $("#animal-input").val().trim();

  // The animal from the textbox is then added to our animalsArr array
  animalsArr.push(animal);
  $("#animal-input").val("");

  // Redraw the animal buttons
  renderButtons();
});

// fetchAnimalGifs will fetch ten animal Gifs with the Giphy API
function fetchAnimalGifs() {
  var animalName = $(this).attr("data-animal");
  console.log("Animal is: " + animalName);

  // Construct the Giphy URL
  /*
  var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

    $.ajax({
      method: "GET",
      url: queryURL,
    })
    .done(function( result ) {
      // Log the data in console
      console.log("result = " + JSON.stringify(result));

      // Display the movie info
      $("#movie-info").html(JSON.stringify(result));
    });
  */
}

// Render the initial animal buttons when the HTML has finished loading
$(document).ready(function() {
  renderButtons();
});

// An event handler for the animal buttons to fetch appropriate Gifs
$(document).on("click", ".animalButton", fetchAnimalGifs);