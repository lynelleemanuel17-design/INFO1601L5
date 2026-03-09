function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;

  for (let person of people) {
    sum += calcBMI(person.weight, person.height);
  }

  return sum / people.length;
}

let people = [
  createPerson("Sally", 1.6, 60),
  createPerson("Ben", 1.81, 81),
  createPerson("Shelly", 1.5, 50)
];

console.log(avgBMI(people));
