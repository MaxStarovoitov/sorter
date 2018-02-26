class Sorter {
  constructor() {
    this.elems = [];
    this.comp = function (l, r) { return l-r; };
  }

  add(e) { this.elems.push(e); }
  at(i) { return this.elems[i]; }
  get length() { return this.elems.length; }

  toArray() { return this.elems; }

  sort(indices) {
    var arr = [];

    indices.sort(this.comp);

    for (var i = 0; i < indices.length; i++) {
      arr.push(this.elems[indices[i]]);
    }

    arr.sort(this.comp);

    for (var i = 0; i < indices.length; i++) {
      this.elems.splice(indices[i], 1, arr[i]);
    }

    return this.elems;
  }

  setComparator(comp) {
    this.comp = comp;
  }
}

module.exports = Sorter;
