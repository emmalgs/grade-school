export class GradeSchool {
  _roster = {};

  roster() {
    return deepCopy(this._roster);
  }

  add(student, grade) {
    const currentRoster = this.roster()
    for (const key in currentRoster) {
      if (currentRoster[key].includes(student) && key !== grade) {
        this._roster[key] = this._roster[key].filter(s => s !== student)
      }
    }

    if (this.roster()[grade] === undefined) {
      this._roster[grade] = [student];
    } else {
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
  const copy = {};
  for (const [key, value] of Object.entries(obj)) {
    copy[key] = [...value];
  }
  return copy;
}
