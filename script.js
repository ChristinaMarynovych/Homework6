const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

  // function 1
  const getSubjects = (students) => {
const prepareSubjects = Object.keys(students.subjects);
return prepareSubjects.map((subject) => subject[0].toUpperCase() + subject.slice(1).toLowerCase().replace('_', ' '));
  }
  console.log(getSubjects(students[0]));
  console.log(getSubjects(students[1]));
  console.log(getSubjects(students[2]));

  // function 2
  const getAverageMark = (students) => {
    const prepareSubjects = Object.keys(students.subjects);
  const averageMarkOfSubject = (mark) => {
    const total = mark.reduce((total, mark) => {
      return total + mark
    }, 0);
    return total / mark.length;
  }
  const acc = prepareSubjects.reduce((acc, key) => {
      return acc + averageMarkOfSubject(students.subjects[key]);
    }, 0);
    
    return (acc/prepareSubjects.length).toFixed(2);
  }
  console.log(getAverageMark(students[0]));
  console.log(getAverageMark(students[1]));
  console.log(getAverageMark(students[2]));

  // function 3
  const getStudentInfo = (students) =>{course: students.course, name: students.name, averageMark: (getAverageMark(students))}
  console.log(getStudentInfo(students[0]));
  console.log(getStudentInfo(students[1]));
  console.log(getStudentInfo(students[2]));

  // function 4
  const getStudentsNames = (students) => {
    return students.map(students => students.name).sort();
};
console.log(getStudentsNames(students));

// function 5
getBestStudent = (students) => {
  const allStudentInfo = students.map((student) => getStudentInfo(student));
  const sortedStudents = allStudentInfo.sort((a, b) => b.averageMark - a.averageMark);
  return sortedStudents[0].name;
  }
console.log(getBestStudent(students));

// function 6
const calculateWordLetters = (string) => {
  let obj = {};
  const array = string.split('');
  array.forEach((el, i) => {
    if (obj[el]) {
       obj[el]++;
    } else {
       obj[el] = 1;
    }
 });
 return obj;
};
console.log(calculateWordLetters('test'));
