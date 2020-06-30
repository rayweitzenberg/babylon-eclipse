export default function sketch(s) {
  let x, y, backgroundColor;
  let x2 = 20;
  let x1 = 0;
  const velocity = 20;

  const tileCount = 10;
  let actRandomSeed = 0;
  let actStrokeCap;

  // const yPos = 10
  let lineOne

  s.setup = () => {
    s.createCanvas(600, 600);
    backgroundColor = s.color(s.random(255), s.random(255), s.random(255));
    s.frameRate(30);
    actStrokeCap = s.ROUND;


    for (let ranY = 1; ranY <= 5; ranY++) {
      console.log("ranIncr", ranY)
      // let randomPos = random()
      lineOne = new singleLine(x1, x2, s.pow(2, ranY))
    }
  };

  s.draw = () => {
    s.clear();
    s.background(242, 203, 5);
    
    lineOne.moveLine()
  };

  class singleLine {
    constructor(x1, x2, yPos) {
      this.x1 = x1;
      this.x2 = x2;
      this.yPos = yPos;
    }

    moveLine() {
      // s.line(this.x1, s.height / 2, this.x2, s.height / 2);
      s.line(this.x1, this.yPos, this.x2, this.yPos);

      console.log('this.yPos', this.yPos)

      if (this.x2 < s.width) {
        this.x2 += velocity;
      }

      if (this.x2 === s.width) {
        this.x2 = s.width;
        this.x1 += velocity;
      }

      if (this.x1 >= s.width) {
        this.x1 = 0;
        this.x2 = 0;
      }
    }
  }

  s.mousePressed = () => {
    backgroundColor = s.color(s.random(255), s.random(255), s.random(255));
    actRandomSeed = s.random(100000);
  };

  s.keyReleased = () => {
    if (s.key == "1") actStrokeCap = s.ROUND;
    if (s.key == "2") actStrokeCap = s.SQUARE;
    if (s.key == "3") actStrokeCap = s.PROJECT;
  };
}
