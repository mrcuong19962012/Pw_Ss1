// 1---
const car = {
  make: "Toyota",
  model: "Corolla",
  year: "2021",
};

console.log(car.year);

// 2---
const person = {
  name: "Cuong",
  address: {
    street: "Nguyen Khuyen",
    city: "Da Nang",
    country: "Viet Nam",
  },
};

console.log(person.address.street);

// 3---

const student = {
  name: "Cuong",
  grades: {
    math: 10,
    english: 6,
  },
};

console.log(student.grades["math"]);

// 4---

const settings = {
  volume: 3,
  brightness: 90,
};

settings.volume = 5;

console.log(settings);

// 5---

const bike = {
  name: "Honda Wave Rsx",
  maker: "Honda",
};

bike.color = "Black";

console.log(bike);

// 6---

const employee = {
  name: "Cuong",
  age: 30,
};

delete employee.age;

console.log(employee);

// 7---
const school = {
  classA: ["An", "Bình", "Châu"],
  classB: ["Đào", "Hương", "Giang"],
};

console.log(school);
