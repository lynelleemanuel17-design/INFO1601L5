//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [89, 34, 67]
    },
    {
      course: 'INFO 1601',
      grades: [89, 34, 67]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [100, 89, 79]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [89, 34, 67]
    }
  ]
};

const students = [bob, sally, paul];


// Function 1: Get average grade for a course
function getAverageGrade(student, course){
  for(let item of student.transcript){
    if(item.course === course){
      let sum = 0;

      for(let grade of item.grades){
        sum += grade;
      }

      return sum / item.grades.length;
    }
  }
  return -1;
}


// Function 2: Get assignment mark
function getAssignmentMark(student, course, num){
  for(let item of student.transcript){
    if(item.course === course){
      return item.grades[num];
    }
  }
  return -1;
}


// Function 3: Average assessment across students
function averageAssessment(students, courseName, assignment){
  let sum = 0;
  let count = 0;

  for(let student of students){
    let mark = getAssignmentMark(student, courseName, assignment);

    if(mark !== -1){
      sum += mark;
      count++;
    }
  }

  if(count === 0){
    return -1;
  }

  return sum / count;
}


// Test outputs
console.log(getAverageGrade(bob, "INFO 1603"));
console.log(getAssignmentMark(bob, "INFO 1603", 1));
console.log(averageAssessment(students, "INFO 1601", 0));
