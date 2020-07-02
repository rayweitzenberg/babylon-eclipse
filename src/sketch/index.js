export default function sketch(s) {
  let topBottomLines = [];
  let leftRightLines = [];
  let rightLeftLines = [];

  s.setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    // Number of spanwned elements is based on viewport size
    //
    const numVertLines = s.windowWidth / 25;
    console.log("numVertLines", numVertLines);
    const numHorizLines = s.windowHeight / 70;
    console.log("numHorizLines", numHorizLines);

    for (let ranY = 0; ranY < numVertLines; ranY++) {
      topBottomLines.push(new topBotLine());
    }

    for (let ranY = 0; ranY < numHorizLines; ranY++) {
      leftRightLines.push(new leftRightLine());
      rightLeftLines.push(new rightLeftLine());
    }
  };

  s.draw = () => {
    s.clear();
    s.background(242, 203, 5);

    for (let i = 0; i < topBottomLines.length; i++) {
      topBottomLines[i].move(s.random(30, 50));
      topBottomLines[i].display();
    }

    for (let i = 0; i < leftRightLines.length; i++) {
      leftRightLines[i].move(s.random(30, 50));
      leftRightLines[i].display();

      rightLeftLines[i].move(s.random(30, 50));
      rightLeftLines[i].display();
    }
  };

  class leftRightLine {
    constructor(x1, x2, yPos) {
      this.x1 = 0;
      this.x2 = s.random(10, s.width);
      this.yPos = s.random(s.height);
      this.velocity = s.random(20, 100);
    }

    move(randVelocity) {
      if (this.x2 < s.width) {
        this.x2 += this.velocity;
      }

      if (this.x2 >= s.width) {
        this.x2 = s.width;
        this.x1 += this.velocity;
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

  class rightLeftLine {
    constructor(x1, x2, yPos) {
      this.x1 = s.width;
      this.x2 = s.width;
      this.yPos = s.random(s.height);
      this.velocity = s.random(20, 100);
    }

    move(randVelocity) {
      if (this.x1 > 0) {
        this.x1 -= this.velocity;
      }

      if (this.x1 <= 0) {
        this.x1 = 0;
        this.x2 -= this.velocity;
      }

      if (this.x2 <= 0) {
        this.x1 = s.width;
        this.x2 = s.width;
        this.yPos = s.random(s.height);
      }
    }

    display() {
      s.line(this.x1, this.yPos, this.x2, this.yPos);
    }
  }

  class topBotLine {
    constructor() {
      this.y1 = 0;
      this.y2 = s.random(-400, s.height);
      this.xPos = s.random(s.width);

      this.velocity = s.random(20, 50);
    }

    move() {
      if (this.y2 < s.height) {
        this.y2 += this.velocity;
      }

      if (this.y2 >= s.height) {
        this.y2 = s.height;
        this.y1 += this.velocity;
      }

      if (this.y1 >= s.height) {
        this.y1 = 0;
        this.y2 = 0;
        this.yPos = s.random(s.height);
      }
    }

    display() {
      s.line(this.xPos, this.y1, this.xPos, this.y2);
    }
  }
}
