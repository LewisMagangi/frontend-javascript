namespace Subjects {
  export interface Subject {
    setTeacher(teacher: Teacher): void;
  }

  export class SubjectBase implements Subject {
    teacher: Teacher = {} as Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
