import { Shape } from './Shape'
import type { IShape, RGB } from '../typings'

export interface NodeProps {
  color: RGB
  x: number
  y: number
  radius: number
}

export class Node extends Shape implements IShape {
  props: NodeProps
  constructor(props: NodeProps) {
    super()
    this.props = props
  }

  draw(ctx: CanvasRenderingContext2D) {
    const { x, y, radius } = this.props
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = this.getRgb(this.props.color)
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.closePath()
  }

  isPointInClosedRegion(e: MouseEvent): boolean {
    console.log(e)
    return false
  }
}
