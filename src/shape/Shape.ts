import type { RGB } from '../typings'

export class Shape {
  constructor() {}

  getRgb(rgb: RGB) {
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
  }
}
