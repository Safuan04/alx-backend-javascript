export default function cleanSet(set, startString) {
  if (
    startString.length === 0
    || typeof startString !== 'string'
    || typeof set !== 'object'
    || !(set instanceof Set)
    || set.length === 0) {
    return '';
  }

  const setString = [];

  for (const element of set) {
    if (element && element.startsWith(startString)) {
      setString.push(element.substring(startString.length));
    }
  }
  return setString.join('-');
}
