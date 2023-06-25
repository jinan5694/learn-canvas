import { FlowGraph, Util } from './index'
const container = document.getElementById('container')!
new FlowGraph(container, 500, 500)

console.log(Util.foo)
console.log(Util.bar())
