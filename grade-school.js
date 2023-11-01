export class GradeSchool {
  constructor() {
    this._roster = {};
  }

  roster() {
    return { ...this._roster };
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
