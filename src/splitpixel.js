const zrender = require('zrender');

class SplitPixel extends zrender.Group {
   constructor(x, y, isRotated) {
     super();
     this.position = [x*11, y*11];
     this.origin = [5, 5];
     this.rotation = isRotated ? -Math.PI/2 : 0;
     this.top = new zrender.Polygon({
       shape: {
        points: [[0, 0], [9.5, 0], [0,9.5]]
       }
      })
      this.bottom = new zrender.Polygon({
        shape: {
         points: [[10, .5], [10, 10], [.5,10]]
        }
       })
       this.bottom.style.fill = status === 1 ? "#fded52"
       : status === -.5 ?  "#fded52" 
       : "#383838";

       this.top.style.fill = status === 1 ? "#fded52"
       : status === .5 ?  "#fded52" 
       : "#383838";

      this.add(this.bottom);
      this.add(this.top);
   }

   set (status) {
       this.bottom.style.fill = status === 1 ? "#fded52"
       : status === -.5 ?  "#fded52" 
       : "#383838";

       this.top.style.fill = status === 1 ? "#fded52"
       : status === .5 ?  "#fded52" 
       : "#383838";

       this.dirty();
   }
}

module.exports = SplitPixel