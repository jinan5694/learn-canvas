/**
 * 业务流程图主文件
 */

interface DiagramOptions {
  container: HTMLElement // 容器
  width?: number // 画布宽度
  height?: number // 画布高度
}

export class Diagram {
  container: HTMLElement
  // 像素比率
  ratio = window.devicePixelRatio ?? 1
  ctx?: CanvasRenderingContext2D
  constructor(options: DiagramOptions) {
    console.log('this is diagram')
    this.container = options.container
    this.init(options)
  }

  /**
   * 初始化画布
   */
  init(options: DiagramOptions) {
    const width = options.width ?? this.container.clientWidth
    const height = options.height ?? this.container.clientHeight

    const instance = document.createElement('canvas')

    instance.width = width * this.ratio
    instance.height = height * this.ratio

    instance.style.width = `${width}px`
    instance.style.height = `${height}px`

    const ctx = instance.getContext('2d')
    if (ctx) {
      ctx.scale(this.ratio, this.ratio)
      this.ctx = ctx
    }

    this.container.appendChild(instance)
  }
}
