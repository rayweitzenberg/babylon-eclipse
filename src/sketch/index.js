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
  let theLines = []

  s.setup = () => {
    s.createCanvas(600, 600);
    backgroundColor = s.color(s.random(255), s.random(255), s.random(255));
    s.frameRate(30);


    for (let ranY = 0; ranY < 5; ranY++) {
      theLines.push(new singleLine())
      // console.log('theLines', theLines[ranY])
      // console.log('ranY', ranY)
    }
  };

  s.draw = () => {
    s.clear();
    s.background(242, 203, 5);

    for (let i = 0; i < theLines.length; i++) {
      theLines[i].move()
      theLines[i].display()
    }
  };

  class singleLine {
    constructor(x1, x2, yPos) {
      this.x1 = x1;
      this.x2 = x2;
      this.x1 = 0;
      this.x2 = 50;
      this.yPos = s.random(s.height);
    }

    move() {
      if (this.x2 < s.width) {
        this.x2 += velocity;
        console.log('this.x2', this.x2)
      }

      if (this.x2 >= s.width) {
        this.x2 = s.width;
        this.x1 += velocity;
        console.log('x2 end', this.x2)
      }

      if (this.x1 >= s.width) {
        this.x1 = 0;
        this.x2 = 0;
      }
    }

    display() {
      s.line(this.x1, this.yPos, this.x2, this.yPos);
    }
  }
}
