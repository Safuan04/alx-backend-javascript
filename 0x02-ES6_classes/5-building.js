export default class Building {
  constructor(sfqt) {
    this._sfqt = sfqt;
    this.evacuationWarningMessage();
  }

  get sfqt() {
    return this._sfqt;
  }

  set sfqt(value) {
    this._sfqt = value;
  }

  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
