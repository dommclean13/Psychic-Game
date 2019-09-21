
        // Create array with all options

        var psychicLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

        // Create variable references

        var wins = 0;
        var losses = 0;
        var left = 9;
        var guessesSoFar = [];

        // Create variables that hold references to the places in the HTML where we want to display things.
        var directionsText = document.getElementById("directions-text");
        var winsText = document.getElementById("wins-text");
        var lossesText = document.getElementById("losses-text");
        var guessesLeftText = document.getElementById("guessesleft-text");
        var yourGuessText = document.getElementById("yourguesses-text");

        // Randomly chooses a choice from the options array
        var psychicGuess = psychicLetters[Math.floor(Math.random() * psychicLetters.length)];

        // Function to reset game after a win and psychic pick a new letter
        function reset () {
            left = 9;
            guessesSoFar = [];
            psychicGuess = psychicLetters[Math.floor(Math.random() * psychicLetters.length)];
        }
    
        // Function to run whenever user presses letter of alphabet
        document.onkeyup = function (event) {

            
            // Determines which key was pressed
            var userGuess = event.key;
            guessesSoFar.push(userGuess);

            // Determine output & increments


            if (psychicGuess === userGuess) {
                    wins++
                    reset ();
                } else {
                    left--;
                }
                if (left === 0) {
                    losses++;
                    reset ();
                }

                update();
        }
        // Update the page with new stats 
        function update() {
            winsText.textContent = wins;
            lossesText.textContent = losses;
            guessesLeftText.textContent = left;
            yourGuessText.textContent = guessesSoFar;

    };







