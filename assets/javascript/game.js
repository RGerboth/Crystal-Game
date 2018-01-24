// crystal game logic

  var targetNumber = 0;
  var counter = 0;
  var numberOfCrystals = 4;
  var wins = 0;
  var losses = 0;

  function newGame() {
    //reset player total 
    counter = 0;
    $("#player-total").text(counter);

    //new target number
    targetNumber = (Math.floor(Math.random() * 100 ) + 20);
    console.log("Target Num: " + targetNumber)

    $("#number-to-guess").text(targetNumber);

    //clear old crystals, if any 
    $("#crystals").empty();

    // create a for loop to create new crystals.
    for (var i = 0; i < numberOfCrystals; i++) {
      // For each iteration, we will create an imageCrystal

      var imageCrystal = $("<img>");
      // First each crystal will be given the class ".crystal-image".
      // This will allow the CSS to take effect.
      imageCrystal.addClass("crystal-image");

      // Each imageCrystal will be given a src link to the crystal image
      imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

      // Each imageCrystal will be given a data attribute called data-crystalValue.
      // This data attribute will be set equal to the array value.
      var crystalValue = (Math.floor(Math.random() * 12 ) + 1);
      imageCrystal.attr("data-crystalvalue", crystalValue);

      // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
      $("#crystals").append(imageCrystal);
      console.log("Crystal " + i + " value: " + crystalValue)
    }
  }

  // start the first game 
  newGame ();

  $("body").on("click", ".crystal-image", function() {
    // alert("crystal clicked");
    // get the value for the crystal
    var crystalValue = ($(this).attr("data-crystalvalue"));
    // parse value into an integer
    crystalValue = parseInt(crystalValue);
    // add the crystalValue to the user's "counter" which is a global variable.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    // alert("New score: " + counter);
    $("#player-total").text(counter);

    if (counter === targetNumber) {
      wins++;
      $("#player-wins").text(wins);
      newGame();
    }
    else if (counter >= targetNumber) {
      losses++;
      $("#player-losses").text(losses);
      newGame();
    }

  });