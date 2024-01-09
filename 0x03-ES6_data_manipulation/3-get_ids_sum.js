export default function getStudentIdsSum(studentslist) {
  const studentsSum = studentslist.reduce((total, student) => total + student.id, 0);

  return studentsSum;
}
