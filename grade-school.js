export class GradeSchool {

  _roster = {};

  roster() {
    return deepCopy(this._roster);
  }

  add(student, grade) {
    if (this.roster()[grade] === undefined) {
      this._roster[grade] = [student];
    } else if (!this.roster()[grade].includes(student)) {
      this._roster[grade].push(student);
      this._roster[grade].sort();
    }
  }

  grade(grade) {
    const students = this.roster()[grade] || [];
    return students;
  }
}

function deepCopy(obj) {
  const copy = {}
  for (const [key, value] of Object.entries(obj)) {
    copy[key] = [...value];
  }
  return copy;
}
