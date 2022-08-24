const fish = {
    name: 'king Hilsa',
    address: 'chandpur',
    color: 'silver',
    phone: '01717658899',
    price : 4000
}

// const phone = fish.phone;
const {phone} = fish;



console.log(phone);
console.log(fish);

const {age ,name} = {name: 'Almas' , age:56, profession: 'Makeup Artist'}
console.log(age);

const {address} = fish;
console.log(address);

// array destructuring
const [first, another] = [44, 99];
console.log(first, another);

const nayoks = ['sakib' , 'bappi' , 'raj'];
const  [ king,lost, notun] = nayoks;
console.log(notun);

const getNames(){
    return ['Alim' , 'Halim'];

}

const [baba, chacha] = getNames();