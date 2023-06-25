export * from './util'
/**
 * 业务流程图
 */

export class FlowGraph {
  private container: HTMLElement
  private width: number
  private height: number
  private canvas: HTMLCanvasElement

  ctx: CanvasRenderingContext2D | undefined

  constructor(container: HTMLElement, width: number, height: number) {
    this.container = container
    this.width = width
    this.height = height

    this.canvas = document.createElement('canvas')
    this.init()

    this.renderLine()
  }

  init() {
    const ratio = window.devicePixelRatio || 1

    this.canvas.width = this.width * ratio
    this.canvas.height = this.height * ratio

    this.canvas.style.width = `${this.width}px`
    this.canvas.style.height = `${this.height}px`
    this.canvas.style.backgroundColor = '#F2F7FA'

    this.ctx = this.canvas.getContext('2d')!
    if (this.ctx) {
      this.ctx.scale(ratio, ratio)
    }
    this.container.appendChild(this.canvas)
  }

  renderLine() {
    if (this.ctx) {
      const ctx = this.ctx

      ctx.lineWidth = 20
      ctx.lineCap = 'round'
      ctx.setLineDash([0, 40])
      const lineargradient = ctx.createLinearGradient(30, 400, 470, 400)
      lineargradient.addColorStop(0, 'red')
      lineargradient.addColorStop(1, 'blue')
      ctx.strokeStyle = lineargradient
      ctx.beginPath()
      ctx.moveTo(30, 400)
      ctx.lineTo(470, 400)
      ctx.stroke()
    }
  }
}
