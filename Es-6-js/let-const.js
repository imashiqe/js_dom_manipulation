// breakup with var
// no more use of var
// let : let to reassign
// const: do not allow it  to reassign

let money = 25;
money = 35;
console.log(money);

const bird  = 'jaan pakhi';
// bird = moyna pakhi';
const message = bird + 'Potas Potas'
console.log(message)

const numbers = [12,89,65,45];
// reassign is not allowed
// numbers = [77,66,55,22,99];
numbers.push(123);
numbers[1] = 90;
console.log(numbers);

const student = {
    name: 'mofiz',
    address: 'Rangpur'
}

// student = {
//     name: 'Mofazzol'
// }
student.name = 'Mofazzol';

let sum = 0;
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    sum = sum + number;

}
console.log(number);

