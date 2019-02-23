const TEST = "Denver";
const zrender = require('zrender');
var zr = zrender.init(document.getElementById('main'));
const Grid = require('./grid');

class Row extends zrender.Group {
  constructor({length, scale, offsetY}) {
    super();
    this.length = length;
    this.scale = [scale,scale];
    this.position = [0, offsetY]
    for (let i = 0; i < this.length; i++) {
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

class DepartureBoard extends zrender.Group {
  constructor(zr) {
    super();
    this.height = zr.getHeight();
    this.width = zr.getWidth(); 
    for (var i = 0; i < 10; i++) {
      let a = new Row({length: 29, offsetX: 0, offsetY: i*70, scale: this.width/(29*60+5)});
      a.set("test");
      this.add(a);
    }
    this.dirty();
  }

  set(items) {
    for (let i = 0; i < this._children.length; i++) {
      this._children[i].set(items[i].time);
    }
  }
}
const a = new DepartureBoard(zr)
zr.add(a);

a.set([{
  time: "14:40",
  no: "EI686",
  dest: "Geneva"
},
{
  time: "15:20",
  no: "EI686",
  dest: "Geneva"
},
{
  time: "15:45",
  no: "EI686",
  dest: "Geneva"
},
{
  time: "14:40",
  no: "EI686",
  dest: "Geneva"
},
{
  time: "14:40",
  no: "EI686",
  dest: "Geneva"
},
{
  time: "14:40",
  no: "EI686",
  dest: "Geneva"
},
{
  time: "14:40",
  no: "EI686",
  dest: "Geneva"
}])

