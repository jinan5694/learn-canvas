export interface IShape {
  draw: (ctx: CanvasRenderingContext2D) => void
  // 判断鼠标的点是否在图形内部
  isPointInClosedRegion: (e: MouseEvent) => boolean
}

export type RGB = [r: number, g: number, b: number]

bar = bar + 1
console.log(bar)
