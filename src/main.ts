// import { clock } from './clock'

const canvas = document.getElementById("canvas")! as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

// setTimeout(() => {
//         window.requestAnimationFrame(clock);
// }, 0);



// 节点
ctx.fillStyle = '#ccc'
ctx.shadowColor = 'red'
ctx.shadowOffsetY = 10
ctx.shadowBlur = 10
ctx.beginPath()
ctx.arc(200, 200, 100, 0, 6.3)
ctx.fill()

// reset
ctx.shadowOffsetY = 0
ctx.shadowBlur = 0

// icon
const img = new Image()
img.src = '/plus.png'

img.onload = function () {
        const offset = 64 / 2
        ctx.drawImage(img, 200 - offset, 200 - offset)
        // ctx.beginPath()
        // ctx.moveTo(200, 600)
        // const ptrn = ctx.createPattern(img, 'no-repeat')
        // ctx.fillStyle = ptrn!
        // ctx.fill()
        
}

// text
ctx.font = 'bold 18px sans-serif'
ctx.textAlign = 'center'
ctx.fillStyle = '#333'
ctx.fillText('GitHub', 200, 350)
ctx.font = '12px sans-serif'
ctx.fillStyle = '#666'
ctx.fillText('Get an Organization', 200, 370)

// line 画出了连线 ^_^
ctx.lineWidth = 20
ctx.lineCap = 'round'
ctx.setLineDash([0, 40])
const lineargradient = ctx.createLinearGradient(30, 400, 470, 200)
lineargradient.addColorStop(0, 'red')
lineargradient.addColorStop(1, 'blue')
ctx.strokeStyle = lineargradient 
ctx.beginPath()
ctx.moveTo(30, 400)
ctx.lineTo(470, 400)
ctx.stroke()


