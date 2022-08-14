console.log('This is separate JS file');
// option 1 directly put html element

// option 2 bg change 
function makeRed(){
    document.body.style.backgroundColor = 'red';
}


// options 3
const makeBlueButton = document.getElementById('make-blue');
       makeBlueButton.onclick = makeBlue;

       function makeBlue (){
        document.body.style.backgroundColor = 'blue';
       }

// option 04
const purpleButton = document.getElementById('make-purple');
     purpleButton.onclick = function makePurple() {
        document.body.style.backgroundColor = 'purple'
     }