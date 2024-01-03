export default function getResponseFromAPI() {
  const p = new Promise((resolve, reject) => {
    const x = 1 + 1;
    if (x === 2) {
      resolve('Success');
    } else {
      reject(new Error('Failed'));
    }
  });

  return p;
}
