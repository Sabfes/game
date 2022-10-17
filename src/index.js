import Player from "./Player.js";
import './index.css'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const player = new Player(ctx)
const animate = () => {
  console.log('anim')
  ctx.clearRect(0,0, 1000, 1000)
  player.draw(new Date().getTime())
  requestAnimationFrame(animate)
}
animate()