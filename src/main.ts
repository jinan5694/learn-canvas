import { FlowGraph, Util } from './index'
const container = document.getElementById('container')!
const graph = new FlowGraph(container, 500, 500)

console.log(Util.foo)
console.log(Util.bar())
console.log(graph)

export function logging<T extends { length: number }>(arg: T): T {
  console.log(arg.length);
  return arg
}
