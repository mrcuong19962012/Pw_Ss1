//1---
for (let i = 2; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log(`\n`);
}

//2---
for (let i = 0; i < 4; i++) {
  for (let j = 1; j <= 5; j++) {
    process.stdout.write(`${i * 5 + j} `);
  }
  console.log(`\n`);
}

//3---
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${j + 1}`);
  }
  console.log(`\n`);
}

//4---

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 8; j++) {
    if (i === 0 || i === 4 || j === 0 || j === 7) {
      process.stdout.write(`*   `);
    } else {
      process.stdout.write(`    `);
    }
  }
  console.log(`\n`);
}

//5---

const arr = [2, 4, 6, 8, 3, 7, 5, 1];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === 10) {
      console.log(`${arr[i]} + ${arr[j]} = ${arr[i] + arr[j]}`);
    }
  }
}

//6---

for (let i = 4; i >= 0; i--) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${j + 1}`);
  }
  console.log(``);
}

//7---
const DAY_OF_MONTH = 30;
let weekSt = 1;
process.stdout.write(`Tuần ${weekSt}: `);
weekSt++;
for (let i = 0; i < DAY_OF_MONTH; i++) {
  if ((i + 1) % 7 === 0) {
    console.log(`${i + 1} `);
    process.stdout.write(`Tuần ${weekSt}: `);
    weekSt++;
  } else {
    process.stdout.write(`${i + 1} `);
  }
}

//8---
console.log(``);

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 9; j++) {
    if (j <= 4 + i && j >= 4 - i) {
      process.stdout.write(`*`);
    } else {
      process.stdout.write(` `);
    }
  }
  console.log(``);
}

//9---

const myArr = [];
let total = 0;
let count = 0;
for (let i = 0; i < 100; i++) {
  if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
    process.stdout.write(`${i + 1} `);
    total = total + i + 1;
    count++;
    if (count % 5 === 0) {
      console.log(``);
    }
  }
}

console.log(`\nTotal: ${total}`);

//10---

for (let i = -3; i <= 3; i++) {
  for (let j = -3; j <= 3; j++) {
    if (
      j <= Math.abs(i) + 3 &&
      j >= Math.abs(i) - 3 &&
      j <= 3 + i &&
      j <= 3 - i
    ) {
      process.stdout.write(`*`);
    } else {
      process.stdout.write(` `);
    }
  }
  console.log(``);
}
