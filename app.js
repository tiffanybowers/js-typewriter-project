const textDisplay = document.getElementById('text');
console.log(textDisplay);

let currentPhrase = [];
let i = 0;
let j = 0;
let isDeleting = false;

const phrases = [
    'Hello, my name is Tiffany.',
    'I love to code.',
    'I love to read a good book.'
]

function loop() {
    textDisplay.innerHTML = phrases[0];


    if(i < phrases.length) {
        if(!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            console.log(currentPhrase);
        }
    }

    setTimeout(loop, 2000) //2seconds
}

loop();