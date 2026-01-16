// 1---
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

// 2---

for (let i = 1; i <= 10; i++) {
  console.log(`9 x ${i} = ${9 * i}`);
}

// 3---

const arr = [];
for (let i = 1; i <= 99; i++) {
  if (i % 2 !== 0) {
    arr.push(i);
  }
}
console.log(arr);

// 4---

for (let i = 1; i <= 10; i++) {
  console.log(`user${i}@example.com`);
}

// 5---

const salesTotal = [
  {
    month: 1,
    total: 12,
  },
  {
    month: 2,
    total: 200,
  },
  {
    month: 3,
    total: 54,
  },
  {
    month: 4,
    total: 8,
  },
  {
    month: 5,
    total: 30,
  },
  {
    month: 6,
    total: 300,
  },
  {
    month: 7,
    total: 4,
  },
  {
    month: 8,
    total: 5,
  },
  {
    month: 9,
    total: -33,
  },
  {
    month: 10,
    total: 5,
  },
  {
    month: 11,
    total: 3,
  },
  {
    month: 12,
    total: 1,
  },
];

let totalResult = 0;

for (let i = 0; i < salesTotal.length; i++) {
  totalResult = totalResult + salesTotal[i].total;
}

console.log(totalResult);


