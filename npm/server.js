// console.log("Hello World")
var slugify = require("slugify")

// const a = slugify("some string")
// console.log(a)

// const a = slugify("some string", "/")
// console.log(a)

// const b = slugify("some string", "_")
// console.log(b)

const b = slugify("some %^&&^%&^*tring", "_")
console.log(b)