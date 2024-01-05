class Color {
  constructor(r, g, b) {
    // Assign the RGB values as a property of `this`.
    this.values = [r, g, b];
  }
}

const red = new Color(255, 0, 0);
console.log(red);
