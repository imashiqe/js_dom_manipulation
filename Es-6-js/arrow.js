//function declaration

function add(first, second){
    const total = first + second;
    return total;
}

const number = 56;
//function expression
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}


//function expression with anonymous function
const add2 = function add1(first, second){
    const total = first + second;
    return total;


}


function add(first, second){
   return  first + second;

}

// arrow function
const add5 = function(first, second) => first + second;

const result = add(10,20);
console.log(result);