const textDisplay = document.getElementById('text');
// Initialize an empty array to store the current phrase being typed
let currentPhrase = [];
// Initialize counter for which phrase we're on (from the phrases array)
let i = 0;
// Initialize counter for which character we're on within the current phrase
let j = 0;
let isDeleting = false;
let isEnd = false;

let phrases = [
    'Hello, my name is Tiffany.',
    'I love to code.',
    'I love to read a good book.',
]

/**
 * Main function that creates the typewriter effect
 * This function runs repeatedly using setTimeout to simulate typing
 */
function loop() {

    if(i < phrases.length) {
        // TYPING MODE: If we're not deleting and haven't reached the end of the current phrase
        if(!isDeleting && j <= phrases[i].length) {
            // Add the next character to our currentPhrase array
            currentPhrase.push(phrases[i][j]);
            j++;
            // Update the display with the current phrase
            // .join('') converts the array to a string without commas between items
            textDisplay.innerHTML = currentPhrase.join('');
        }

        // DELETING MODE: If we're deleting and there are still characters to delete
        if(isDeleting == true && j > 0) {
            // Remove the last character from our currentPhrase array
            currentPhrase.pop();
            j--;
            textDisplay.innerHTML = currentPhrase.join('');
        }

        if(j === phrases[i].length) {
            isEnd = true; // Indicates we've reached the end (used for timing)
            isDeleting = true; // Switch to deletion mode
        }

        if(isDeleting && j === 0) {
            // Reset the current phrase to empty
            currentPhrase = [];
            // Turn off deleting mode
            isDeleting = false;
            i++;
            // If we've gone through all phrases, loop back to the first one
            if(i === phrases.length) {
                i = 0;
            }
        }

    }

    // TIMING CONTROL
    const spedUp = Math.random() * 80;
    const normalSpeed = Math.random() * 300;

    // Choose the appropriate timing:
    // - If at the end of a phrase, pause for 2 seconds
    // - If deleting, use faster speed
    // - Otherwise use normal typing speed
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;

    // Reset the "end" flag after we've used it for timing
    if (isEnd) isEnd = false;

    setTimeout(loop, time);
}

loop();