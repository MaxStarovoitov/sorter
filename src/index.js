class Sorter {
  constructor() {
    this.elems = [];
    this.compare = function (a, b) { return a - b; };
  }

  add(e) { this.elems.push(e); }

  at(i) { return this.elems[i]; }

  get length() { return this.elems.length; }

  toArray() { return this.elems; }


  sort(indices) {
    var arr = [];

    for (var i = 0; i < indices.length; i++) {
      arr.push(this.elems[indices[i]]);
    }

    arr.sort(this.compare);

    if (indices[0] < indices[1]) {
      for (var i = 0; i < indices.length; i++) {
        this.elems.splice(indices[i], 1, arr[i]);
      }
    } else { indices.reverse(); }

    for (var i = 0; i < indices.length; i++) {
      this.elems.splice(indices[i], 1, arr[i]);
    }
  }


  setComparator(compareF) {
    if (compareF) {
      return this.compare = compareF;
    } else {
      return this.compare;
    }
  }
}

module.exports = Sorter;
