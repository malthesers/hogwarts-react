import { Student, StudentHouse } from '../interfaces/Student';

export default function getMyself() {
  const student:Student = {
    fullName: 'Malthe Kusk Lauritsen',
    firstName: 'Malthe',
    middleName: 'Kusk',
    nickName: undefined,
    lastName: 'Lauritsen',
    gender: 'Boy',
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

function getRandomHouse(): StudentHouse {
  const houses:StudentHouse[] = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']

  return houses[Math.floor(Math.random() * 4)];
}
