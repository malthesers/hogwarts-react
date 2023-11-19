'use strict';

import studentsData from '../data/students.json';
import familyData from '../data/families.json';
import { BloodStatus, Gender, Student, StudentHouse, UnformattedStudent } from '../interfaces/Student';

interface FamilyNameList {
  half: string[],
  pure: string[]
}

export default function getFormattedStudents():Student[] {
  let students:Student[] = [];
  let index = 1;

  studentsData.forEach((student) => {
    const formattedStudent:Student = formatStudent(student, studentsData, familyData);
    students.push({ ...formattedStudent, id: index });
    index++;
  });

  return students;
}

function formatStudent(unformattedStudent:UnformattedStudent, students:UnformattedStudent[], familyNameList:FamilyNameList):Student {
  const lastNameList:string[] = getLastNameList(students);
  const student:Student = {
    prefect: false,
    expelled: false,
    inquisitor: false,
    fullName: capitalise(unformattedStudent.fullname),
    firstName: getFirstName(unformattedStudent),
    middleName: getMiddleName(unformattedStudent),
    nickName: getNickName(unformattedStudent),
    lastName: getLastName(unformattedStudent),
    gender: getGender(unformattedStudent),
    house: getHouse(unformattedStudent),
    photo: getPhoto(unformattedStudent, lastNameList),
    bloodStatus: 'Pure-blood',
    captain: false
  };
  
  student.bloodStatus = getBloodStatus(student.lastName, familyNameList),
  student.captain = getCaptaincy(student.firstName)

  return student;
}

function getFirstName(unformattedStudent:UnformattedStudent): string {
  return capitalise(unformattedStudent.fullname).split(' ')[0];
}

function getMiddleName(unformattedStudent:UnformattedStudent):(string | undefined) {
  let fullName:string[] = capitalise(unformattedStudent.fullname).split(' ');
  let middleName:(string | undefined) = fullName.join(' ');

  if (fullName.length > 2 && !middleName.includes('"')) {
    middleName = middleName.substring(middleName.indexOf(' ') + 1, middleName.lastIndexOf(' '));
  } else {
    middleName = undefined;
  }

  return middleName;
}

function getNickName(unformattedStudent:UnformattedStudent):(string | undefined) {
  let fullName:string[] = capitalise(unformattedStudent.fullname).split(' ');
  let nickName:(string | undefined) = fullName.join(' ');

  if (fullName.length > 2 && nickName.includes('"')) {
    nickName = nickName.substring(nickName.indexOf(' ') + 1, nickName.lastIndexOf(' '));
  } else {
    nickName = undefined;
  }

  return nickName;
}

function getLastName(unformattedStudent:UnformattedStudent):(string | undefined) {
  let fullName:string[] = capitalise(unformattedStudent.fullname).split(' ');
  let lastName:(string | undefined) = fullName.length > 1 ? fullName[fullName.length - 1] : undefined;

  return lastName;
}

function getGender(unformattedStudent:UnformattedStudent):Gender {
  return capitalise(unformattedStudent.gender) as Gender;
}

function getHouse(unformattedStudent:UnformattedStudent):StudentHouse {
  return capitalise(unformattedStudent.house) as StudentHouse;
}

function getPhoto(unformattedStudent: UnformattedStudent, lastNameList:string[]):`${string}.png` {
  // Get names
  let fullName:string = unformattedStudent.fullname.trim().toLowerCase();
  let lastName:string = fullName.substring(fullName.lastIndexOf(' ') + 1);
  let firstName:string = fullName.substring(0, fullName.indexOf(' '));

  // Handle hyphenated lastName scenarios
  if (lastName.includes('-')) lastName = lastName.substring(lastName.lastIndexOf('-') + 1);

  // Handle duplicate lastName scenarios
  let lastNameCount:number = 0;

  lastNameList.forEach((studentLastName) => {
    if (lastName === studentLastName) lastNameCount++;
  });

  // Use initial if unique last name
  if (lastNameCount === 1) firstName = firstName[0];

  let photoSrc:`${string}.png` = `${lastName}_${firstName}.png`;

  if (photoSrc.includes('undefined')) photoSrc = 'default.png';

  return photoSrc;
}

function getBloodStatus(lastName:(string | undefined), familyNameList:FamilyNameList):BloodStatus {
  let bloodStatus:BloodStatus = 'Muggle-born';
  if (lastName) {
    if (familyNameList.pure.includes(lastName)) bloodStatus = 'Pure-blood';
    if (familyNameList.half.includes(lastName)) bloodStatus = 'Half-blood';
  }

  return bloodStatus;
}

function getCaptaincy(name:string):boolean {
  const captains:string[] = ['Harry', 'Zacharias', 'Pansy', 'Anthony']

  return captains.includes(name);
}

function getLastNameList(students:UnformattedStudent[]):string[] {
  let lastNameList:string[] = [];

  students.forEach((student) => {
    let lastName = student.fullname.trim().toLowerCase();
    lastName = lastName.substring(lastName.lastIndexOf(' ') + 1);

    if (lastName.includes('-')) lastName = lastName.substring(lastName.lastIndexOf('-') + 1);

    lastNameList.push(lastName);
  });

  return lastNameList;
}

function capitalise(textToCapitalise:string):string {
  // Make everything lower case
  textToCapitalise = textToCapitalise.toLowerCase().trim();

  // Array of filters to capitalise following letters
  const filters:string[] = [' ', '-', '"'];

  // Loop through each filter
  filters.forEach((filter) => {
    textToCapitalise = textToCapitalise
      .split(`${filter}`)
      .map((filteredString) => {
        return filteredString[0].toUpperCase() + filteredString.substring(1);
      })
      .join(`${filter}`);
  });

  return textToCapitalise;
}
