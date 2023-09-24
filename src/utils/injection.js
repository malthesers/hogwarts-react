export default function getMyself() {
  const student = {
    fullName: 'Malthe Kusk Lauritsen',
    firstName: 'Malthe',
    middleName: 'Kusk',
    nickName: undefined,
    lastName: 'Lauritsen',
    gender: 'Male',
    house: getRandomHouse(),
    photo: 'default.png',
    bloodStatus: 'Half-breed',
    captain: false,
    prefect: false,
    expelled: false,
    inquisitor: false,
  };

  return student;
}

function getRandomHouse() {
  return ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'][Math.floor(Math.random() * 4)];
}
