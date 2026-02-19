const firstName = "Babatunde";
const lastName = "Owoseni";
const age = 18;
const isStudent = true;

const introduction = `Hello! My name is ${firstName} ${lastName}. I am ${age} years old.`;
const studentStatus = `Am I a student? ${isStudent}`;

console.log(introduction);
console.log(studentStatus);

const currentYear = 2026;
const birthYear = currentYear - age;
console.log(`I was born in ${birthYear}.`);
