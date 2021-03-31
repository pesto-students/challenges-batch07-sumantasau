class Cycled {
  constructor(arrInput) {
    this.arrVal = arrInput;
    this.index = 0;
  }

  current() {
    return this.arrVal[this.index];
  }

  next() {
    this.index += 1;
    if (this.index === (this.arrVal.length)) {
      this.index = 0;
    }
    return this.arrVal[this.index];
  }

  previous() {
    this.index -= 1;
    if (this.index === -1) {
      this.index = this.arrVal.length - 1;
    }
    return this.arrVal[this.index];
  }

  * [Symbol.iterator]() {
    for (const index of this.arrVal) {
      yield index;
    }
  }
}
export { Cycled };
