//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor(){
    this.school = {};
  }
  
  roster() {
    let namesStudents = [];
    
    const grades = Object.keys(this.school)
      .map(Number)
      .sort((a, b) => a - b);

    grades.forEach((grade) =>{
      let names = this.school[grade].slice().sort();
      namesStudents.push(...names);
    });
    
    return namesStudents;
  }

  add(name, grade) {
    for(let students of Object.values(this.school)){
      if(students.includes(name)) return false;
    }

    if(!this.school[grade]) this.school[grade] = [];

    this.school[grade].push(name);
    return true;
    
  }

  grade(grade) {
    if(!this.school[grade]) return [];

    let namesStudents = [];

    for(let names of this.school[grade]){
      namesStudents.push(names);
    }
    
    return namesStudents.sort();
    
  }
}
