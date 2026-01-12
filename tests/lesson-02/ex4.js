const myheight = 168;

const myIdealWeight = ((myheight % 100) * 9) / 10;

const myMaxWeight = myheight % 100;

const myMinWeight = ((myheight % 100) * 8) / 10;

console.log(
  `Cân nặng lý tưởng = ` +
    myIdealWeight +
    `, Cân nặng tối đa = ` +
    myMaxWeight +
    `, Cân nặng tối thiểu = ` +
    myMinWeight
);
