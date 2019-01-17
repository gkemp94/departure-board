const TEST = "Denver";
const zrender = require('zrender');
var zr = zrender.init(document.getElementById('main'));
const Grid = require('./grid');

class Row extends zrender.Group {
  constructor(len) {
    super();
    this.position = [400,350]
    this.len = len;
    for (let i = 0; i < this.len; i++) {
      this.add(new Grid(i))
    }
  }

  set(phrase) {
    const letters = phrase.split("");
    this._children.forEach((grid, i) => {
      grid.set(letters[i]);
    })
    this.dirty();
  }
}
const letters = "Departures"
const row = new Row(letters.length);



zr.add(row);
row.set(letters.toUpperCase());

const increment = () => setTimeout(() => {
  row.set(new Date().toLocaleTimeString('en-US'))
  increment();
}, 1000)

//increment();