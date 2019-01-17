const zrender = require('zrender');

class Pixel extends zrender.Rect {
  constructor(x, y, zr) {
    super();
    this.x = x;
    this.y = y;
    this.shape = { x: x * (10 + 1) , y: y * (10 + 1), r: 0, height: 10, width: 10 };
    this.style.fill = status ? "#fded52" : "#383838";    this.zr = zr;
  }

  set(status) {
    setTimeout(() => {
      this.style.fill = status ? "#fded52" : "#383838";
      this.dirty();
    }, 10* this.y)
  }
}

module.exports = Pixel;