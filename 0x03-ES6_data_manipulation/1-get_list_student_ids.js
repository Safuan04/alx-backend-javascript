export default function getListStudentIds(studentslist) {
  if (!Array.isArray(studentslist)) {
    return [];
  }

  const studentId = studentslist.map((student) => student.id);

  return studentId;
}
