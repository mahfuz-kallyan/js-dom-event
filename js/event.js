console.log('this is separate js file');

// option 2 for onclick system
// we will use it
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option 3
const makeYellow = document.getElementById('make-yellow')
makeYellow.onclick = madeYellow;

function madeYellow() {
    document.body.style.backgroundColor = 'yellow'
}

// option 3 another system
const makePurple = document.getElementById('make-purple');
makePurple.onclick = function name() {
    document.body.style.backgroundColor = 'purple'
}

// option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}
// option 4 another
const makeGreen = document.getElementById('make-green');
makeGreen.addEventListener('click', function makeColor() {
    document.body.style.backgroundColor = 'green'
})

// option 4 final
// important we will use this sometimes
document.getElementById('make-golden').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
   })