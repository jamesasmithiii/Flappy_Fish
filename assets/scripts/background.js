class Background {
  constructor(game) {
    this.game = game;
    this.image = document.getElementById("background");
    this.width = 2400;
    this.height = this.game.baseHeight;
    this.scaledHeight;
    this.scaledWidth;
    this.x;
  }
  update() {
    this.x -= this.game.speed;
    if (this.x < -this.scaledWidth) this.x = 0;
  }
  draw() {
    this.game.ctx.drawImage(
      this.image,
      this.x,
      0,
      this.scaledWidth,
      this.scaledHeight
    );
    this.game.ctx.drawImage(
      this.image,
      this.x + this.scaledWidth,
      0,
      this.scaledWidth - 1,
      this.scaledHeight
    );
    if (this.game.canvas.width >= this.scaledWidth) {
      this.game.ctx.drawImage(
        this.image,
        this.x + this.scaledWidth * 2 - 2,
        0,
        this.scaledWidth,
        this.scaledHeight
      );
    }
  }
  resize() {
    this.scaledWidth = this.width * this.game.ratio;
    this.scaledHeight = this.height * this.game.ratio;
    this.x = 0;
  }
}
