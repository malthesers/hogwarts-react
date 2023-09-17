"use strict";

import studentsData from "../data/students.json";
import familyData from "../data/families.json";

export default function getFormattedStudents() {
  let students = [];

  studentsData.forEach((student) => {
    const formattedStudent = formatStudent(student, studentsData, familyData);
    students.push(formattedStudent);
  });

  return students;
}

function formatStudent(unformattedStudent, students, familyNameList) {
  const lastNameList = getLastNameList(students);
  const student = {
    prefect: false,
    expelled: false,
    inquisitor: false,
  };

  student.fullName = capitalise(unformattedStudent.fullname);
  student.firstName = getFirstName(unformattedStudent);
  student.middleName = getMiddleName(unformattedStudent);
  student.nickName = getNickName(unformattedStudent);
  student.lastName = getLastName(unformattedStudent);
  student.gender = getGender(unformattedStudent);
  student.house = getHouse(unformattedStudent);
  student.photo = getPhoto(unformattedStudent, lastNameList);
  student.bloodStatus = getBloodStatus(student.lastName, familyNameList);
  student.captain = getCaptaincy(student.firstName);

  return student;
}

function getFirstName(unformattedStudent) {
  return capitalise(unformattedStudent.fullname).split(" ")[0];
}

function getMiddleName(unformattedStudent) {
  let fullName = capitalise(unformattedStudent.fullname).split(" ");
  let middleName = fullName.join(" ");

  if (fullName.length > 2 && !middleName.includes('"')) {
    middleName = middleName.substring(middleName.indexOf(" ") + 1, middleName.lastIndexOf(" "));
  } else {
    middleName = undefined;
  }

  return middleName;
}

function getNickName(unformattedStudent) {
  let fullName = capitalise(unformattedStudent.fullname).split(" ");
  let nickName = fullName.join(" ");

  if (fullName.length > 2 && nickName.includes('"')) {
    nickName = nickName.substring(nickName.indexOf(" ") + 1, nickName.lastIndexOf(" "));
  } else {
    nickName = undefined;
  }

  return nickName;
}

function getLastName(unformattedStudent) {
  let fullName = capitalise(unformattedStudent.fullname).split(" ");
  let lastName = fullName.length > 1 ? fullName[fullName.length - 1] : undefined;

  return lastName;
}

function getGender(unformattedStudent) {
  return capitalise(unformattedStudent.gender);
}

function getHouse(unformattedStudent) {
  return capitalise(unformattedStudent.house);
}

function getPhoto(unformattedStudent, lastNameList) {
  // Get names
  let fullName = unformattedStudent.fullname.trim().toLowerCase();
  let lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
  let firstName = fullName.substring(0, fullName.indexOf(" "));

  // Handle hyphenated lastName scenarios
  if (lastName.includes("-")) lastName = lastName.substring(lastName.lastIndexOf("-") + 1);

  // Handle duplicate lastName scenarios
  let lastNameCount = 0;

  lastNameList.forEach((studentLastName) => {
    if (lastName === studentLastName) lastNameCount++;
  });

  // Use initial if unique last name
  if (lastNameCount === 1) firstName = firstName[0];

  let photoSrc = `${lastName}_${firstName}.png`;

  if (photoSrc.includes("undefined")) photoSrc = "default.png";

  return photoSrc;
}

function getBloodStatus(lastName, familyNameList) {
  let bloodStatus = "Muggle-born";

  if (familyNameList.pure.includes(lastName)) bloodStatus = "Pure-blood";
  if (familyNameList.half.includes(lastName)) bloodStatus = "Half-blood";

  return bloodStatus;
}

function getCaptaincy(name) {
  return ["Harry", "Zacharias", "Pansy", "Anthony"].includes(name);
}

function getLastNameList(students) {
  let lastNameList = [];

  students.forEach((student) => {
    let lastName = student.fullname.trim().toLowerCase();
    lastName = lastName.substring(lastName.lastIndexOf(" ") + 1);

    if (lastName.includes("-")) lastName = lastName.substring(lastName.lastIndexOf("-") + 1);

    lastNameList.push(lastName);
  });

  return lastNameList;
}

function capitalise(textToCapitalise) {
  // Make everything lower case
  textToCapitalise = textToCapitalise.toLowerCase().trim();

  // Array of filters to capitalise following letters
  const filters = [" ", "-", '"'];

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
