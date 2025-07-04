//ecmascript6 here extension are a must .mjs
import { cpus, platform, release, freemem, totalmem } from "node:os"

console.log("CPUs", cpus())
console.log("plataforma", platform())
console.log("lanzamiento", release())
console.log("free memory", freemem() / 1024 / 1024)
console.log("total memory", totalmem() / 1024 / 1024)