const SplitPixel = require('./splitpixel');
const Pixel = require('./pixel');
const {getConfiguration} = require('./config');
const zrender = require('zrender');
class Grid extends zrender.Group {
  constructor(x) {
    super();
    this.position = [x*60,0];
    this.width = 5;
    this.height = 7;
    this.init();
  }

  isSplit(x,y) {
    if (x === 0 && (y === 0 || y === 3 || y === 6)) {
        return true;
      } else if (x === 4 && (y === 0 || y===2 || y === 3 || y === 6)) {
        return true;
      }
    else {
      return false;
    }
  }

  isRotated(x,y) {
    if (x == 0) {
      if (y === 3 || y === 6) {
        return true;
      }
    } else if (x == 4) {
      if (y === 0 || y === 3) {
        return true;
      }
    }
  }

  init () {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.isSplit(x,y)) {
        const isRotated = this.isRotated(x,y);
          this.add(new SplitPixel(x, y, isRotated));
        } else {
          this.add(new Pixel(x, y));
        }
      }
    }
  }

  set(sym) {
    const config = getConfiguration(sym)
    this._children.forEach((pixel, i) => {
      pixel.set(config[i]);
    })
  }
}

module.exports = Grid;