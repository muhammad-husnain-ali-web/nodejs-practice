const express = require("express")
// import express from "express"
const app = express()
const port = 3000

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.send("<h1>Hello world2</h1>")
})
app.get("/about", (req, res)=>{
    res.send("<h1>About us</h1>")
})
app.get("/contact", (req, res)=>{
    res.send("<h1>contact us</h1>")
})

app.get("/blog", (req, res)=>{
    res.send("<h1>Hello blog</h1>")
})

app.get("/blog/:slug", (req, res)=>{
    console.log(req.params)
    console.log(req.query)
    res.send(`<h1>Hello ${req.params.slug}</h1>`)
})
app.get("/blog/:slug/:second", (req, res)=>{
    res.send(`<h1>Hello ${req.params.slug} and ${req.params.second}</h1>`)
})


// app.get("/blog/js", (req, res)=>{
//     res.send("<h1>Hello js</h1>")
// })
// app.get("/blog/py", (req, res)=>{
//     res.send("<h1>Hello python</h1>")
// })

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})