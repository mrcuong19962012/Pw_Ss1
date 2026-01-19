const { get } = require("http");

// 1---
function multiply(a, b) {
  console.log(a * b);
}

multiply(3, 4);
multiply(10, 9);

// 2---
function findMin(a, b, c) {
  if (a < b) {
    if (a < c) {
      return a;
    }
    if (a > c) {
      return c;
    }
  }
  if (b < c) {
    return b;
  }
  return c;
}

console.log(findMin(3, 2, 1));
console.log(findMin(4, 3, 4));

// 3---

function getTopStudents(students, threshold) {
  const arr = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= threshold) {
      arr.push(students[i].name);
    }
  }
  return arr;
}

const arr = [
  {
    name: "Nam",
    score: 98,
  },
  {
    name: "Hien",
    score: 90,
  },
  {
    name: "Cuong",
    score: 88,
  },
  {
    name: "Hang",
    score: 78,
  },
];
console.log(getTopStudents(arr, 90));

// 4---

function calculateInterest(principal, rate, years) {
  return principal + (principal * rate * years) / 100;
}
console.log(calculateInterest(100, 5, 2));
