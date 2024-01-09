export default function getStudentsByLocation(studentslist, city) {
  const students = studentslist.filter((student) => student.location === city);

  return students;
}
