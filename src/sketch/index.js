export default function sketch(s) {
  
  let theLines = []

  s.setup = () => {
    s.createCanvas(600, 600);
    // backgroundColor = s.color(s.random(255), s.random(255), s.random(255));
    // s.frameRate(30);


    for (let ranY = 0; ranY < 30; ranY++) {
      theLines.push(new singleLine())
    }
  };

  s.draw = () => {
    s.clear();
    s.background(242, 203, 5);

    for (let i = 0; i < theLines.length; i++) {
      theLines[i].move(s.random(10, 50))
      theLines[i].display()
    }
  };

  class singleLine {
    constructor(x1, x2, yPos) {
      this.x1 = x1;
      this.x2 = x2;
      this.x1 = 0;
      this.x2 = s.random(-400, s.width);
      this.yPos = s.random(s.height);
      this.velocity = s.random(20, 50)
    }

    move(randVelocity) {
      if (this.x2 < s.width) {
        this.x2 += randVelocity;
      }

      if (this.x2 >= s.width) {
        this.x2 = s.width;
        this.x1 += randVelocity;
      }

      if (this.x1 >= s.width) {
        this.x1 = 0;
        this.x2 = 0;
        this.yPos = s.random(s.height);
      }
    }

    display() {
      s.line(this.x1, this.yPos, this.x2, this.yPos);
    }
  }
}
