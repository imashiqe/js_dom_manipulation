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

// Option 5
const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click' , makePink)

function makePink(){
     document.body.style.backgroundColor = 'pink';
}

// Option 6

const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click' , function makeGreen(){
  document.body.style.backgroundColor = 'green'
})

// Option 7
// important
//   document.getElementById('make-goldenrod' , function(){
    document.getElementById('make-goldenrod').addEventListener('click ' , function(){
        document.body.style.backgroundColor = 'goldenrod';
      })
