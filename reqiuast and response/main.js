const express = require("express")
const blog = require("./routers/blog")
const shop = require("./routers/shop")
const app = express()
const port = 3000

app.use(express.static("public"))
app.use("/blog", blog)
app.use("/shop", shop)
// app.get("/", (req, res)=>{
//     console.log("Its a get req")
//     res.send("<h1>Hello get req</h1>")
// })

// app.post("/", (req, res)=>{
//     console.log("Its a post req")
//     res.send("Hello Post req")
// })

// app.put("/", (req, res)=>{
//     console.log("Its a put req")
//     res.send("Hello put req")
// })

// app.delete("/", (req, res)=>{
//     console.log("Its a delete req")
//     res.send("Hello delete req")
// })

// chaining 
// app.get("/", (req, res)=>{
//     console.log("Its a get req")
//     res.send("<h1>Hello get req</h1>")
// }).post("/", (req, res)=>{
//     console.log("Its a post req")
//     res.send("Hello Post req")
// }).put("/", (req, res)=>{
//     console.log("Its a put req")
//     res.send("Hello put req")
// }).delete("/", (req, res)=>{
//     console.log("Its a delete req")
//     res.send("Hello delete req")
// })

app.get("/index", (req, res)=>{
    console.log("Its a index req")
    res.sendFile("templetes/index.html",  {root: __dirname})
})

app.get("/api", (req, res)=>{
    console.log("Its a api req")
    // res.json({a:1, b:2, c:3, name: ["Husnain", "Ali"]})
    res.sendFile("templetes/json.json",  {root: __dirname})
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})