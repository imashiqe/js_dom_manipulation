const users = [
    {id: 1, name: 'abul' , job: 'doctor'}
]

console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul' , job: 'leader'},
        {id: 2, name: 'dabul' , job: 'leader'},
    ]
}
// console.log(data.data[0].job);
const firstJob = (data.data[0].job);

  const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
           second: 'third floor',
            third: 'right side',
        },

        postOffice: 'cantoment',
        city: 'Dhaka'
           
    }
  }

  const userFloor = user.address?.street?.third;
  console.log(userFloor);