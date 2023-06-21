// import { clock } from './clock'

const canvas = document.getElementById("canvas")! as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
const ratio = window.devicePixelRatio || 1;
ctx.scale(ratio, ratio)






// shadow 椭圆

ctx.shadowColor = '#ccc'
ctx.shadowOffsetY = -450
ctx.shadowBlur = 40
ctx.moveTo(300, 300)
ctx.ellipse(200, 500, 40, 10, 0, 0, Math.PI * 2)
ctx.fill()


// reset
ctx.shadowOffsetY = 0
ctx.shadowBlur = 0

// 节点
ctx.fillStyle = '#dcdcdc'
ctx.beginPath()
ctx.arc(200, 200, 60, 0, 6.3)
ctx.fill()

// icon
const img = new Image()
img.height = 64
img.width = 64
img.src = '/plus.png'

img.onload = function () {
        const offset = 64 / 2
        ctx.drawImage(img, 200 - offset, 200 - offset, 64, 64)
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
const lineargradient = ctx.createLinearGradient(30, 700, 470, 700)
lineargradient.addColorStop(0, 'red')
lineargradient.addColorStop(1, 'blue')
ctx.strokeStyle = lineargradient 
ctx.beginPath()
ctx.moveTo(30, 700)
ctx.lineTo(470, 700)
ctx.stroke()


