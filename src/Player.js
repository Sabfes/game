import HeroImage from "./Girl-Sheet.png"

export default class Player {
  constructor(ctx) {
    this.ctx = ctx
    this.w = 24;
    this.h = 24;

    this.x = 600;
    this.y = 200;

    this.frameX = 0;
    this.frameY = 0;
    this.startFrame = 0;
    this.maxFrame = 4;

    this.speed = 4;

    this.heroImage = new Image()
    this.imageSize = 1;
    this.heroImage.src = HeroImage
    this.heroImage.width = 40
    this.heroImage.height= 50

    this.goUp = false;
    this.goDown = false;
    this.goRight = false;
    this.goLeft = false;


    this.initListeners()
  }

  initListeners() {
    window.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'KeyA':
          this.startFrame = 4
          this.frameX = 4
          this.maxFrame = 8
          this.goLeft = true;
          break
        case 'KeyD':
          this.startFrame = 8
          this.frameX = 8
          this.maxFrame = 12
          this.goRight = true;
          break
        case 'KeyW':
          this.startFrame = 12
          this.frameX = 12
          this.maxFrame = 16
          this.goUp = true;
          break
        case 'KeyS':
          this.goDown = true;
          break
        default:
          break
      }
    })

    window.addEventListener('keyup', (e) => {
      this.frameX = 0;
      this.startFrame = 0;
      this.maxFrame = 4;

      switch (e.code) {
        case 'KeyA':
          this.goLeft = false;
          break
        case 'KeyD':
          this.goRight = false;
          break
        case 'KeyW':
          this.goUp = false;
          break
        case 'KeyS':
          this.goDown = false;
          break
        default:
          break
      }})
  }

  draw(time) {
    if (this.frameX <= this.maxFrame && (time % 8 === 0)) {
      this.frameX++
    } else {
      this.frameX = this.startFrame
    }
    this.ctx.drawImage(
      this.heroImage,
      this.frameX * this.w,
      this.frameY * this.h,
      this.w,
      this.h,
      this.goRight ? this.x += this.speed : this.goLeft ? this.x -= this.speed : this.x,
      this.goUp ? this.y -= this.speed : this.goDown ? this.y += this.speed : this.y,
      this.w,
      this.h
    )
  }
}