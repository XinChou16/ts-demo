// class
{  
  class Point {
    x: number;
    y: number;
    draw() {
      // 
    }
    getDistance(another: Point) {
      
    }
  }
}

// constructor
{  
  class Point {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
      this.x = x;
      this.y = y;
    }

    draw() {
      console.log(x, y);
    }
    getDistance(another: Point) {
      
    }
  }

  // let point = new Point()
  // point.x = 1
  // point.y  =2
  // point.draw()
  let point1 = new Point() // 添加?, 使得参数可选
  let point2 = new Point(1, 2)
}

// Interface
{
  let drawPoint = (point: { x: number, y: number }) => {
    // 
  }

  interface Point {
    x: number,
    y: number
  }
  let drawPoint2 = (point: Point) => {
    // 
  }

  drawPoint({
    x: 1,
    y: 2
  })
}

// property
{
  class Point {
    constructor(private x?: number, private y?: number) {

    }
    draw() {
      
    }
    get X() {
      return this.x;
    }
    set X(val) {
      if( val < 0) {
        throw new Error('err');
      }
      this.x = val;
    }
  }

  let point = new Point(1, 2);
  let x = point.X;
  point.X = 10;
  point.draw();

}