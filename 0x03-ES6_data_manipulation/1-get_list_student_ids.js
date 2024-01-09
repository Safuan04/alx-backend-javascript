export default function getListStudentIds(ArrayObj = new Map()) {
  if (!Array.isArray(ArrayObj)) {
    return [];
  }

  return ArrayObj.get('id');
}
