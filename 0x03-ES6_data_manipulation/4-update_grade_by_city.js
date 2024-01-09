export default function updateStudentGradeByCity(studentslist, city, newGrades) {
  const students = studentslist.filter((student) => student.location === city).map(
    (student) => {
      const grades = newGrades.find((grade) => student.id === grade.studentId);
      if (grades) {
        return { ...student, grade: grades.grade };
      }
      return { ...student, grade: 'N/A' };
    },
  );

  return students;
}
