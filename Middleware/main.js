const express = require("express")
const fs = require("fs")
const blog = require("./routers/blog")
// const shop = require("./routers/shop")
const app = express()
const port = 3000

// static middleware
// app.use(express.static("public"))

// router middleware
app.use("/blog", blog)

// application middle
app.use((req, res, next) =>{
    console.log("Changing requast..")
    req.husnain = "Hacked by Husnain"
    next();
})

// third party middleware
// first install by npm like
// const cookieParser =  require("cookie-parser")
// app.use(cookieParser())

// error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send("Searching broke...")
// })

//  requat move to next middleware in it
// app.use((req, res, next) =>{
//     console.log("Changing requast..")
//     req.husnain = "Hacked by Husnain"
//     next();
// })
// app.use("/blog", blog)

// const mylogger = function (req, res, next)
// {
//     console.log("Logged")
//     next();
// }
// app.use(mylogger)

// hanged requast
// app.use((req, res, next) =>{
    // console.log("m1 hanged......")
// })

// res not send forward
// app.use((req, res, next) =>{
//     console.log("m1")
//     res.send("Hacked by Husnain......")
//     next();
// })

// app.use((req, res, next) =>{
//     console.log("m1")
//     next();
// })
// app.use((req, res, next) =>{
//     console.log("m2")
//     next();
// })

// app.use((req, res, next) =>{
//     console.log("m2")
//     console.log("Append file")
//     fs.appendFileSync("Log.txt" , `${Date.now()} is a ${req.method}\n`)
    // console.log("reading file")
    // console.log(fs.readFileSync("Log.txt").toString())
    // console.log("reading  complete file")
//     next();
// })

app.get("/", (req, res)=>{
    console.log("Its a get req")
    res.send(`<h1>Hello get req at / ${req.husnain} and requast is ${req.method}</h1>`)
})
app.get("/about", (req, res)=>{
    console.log("Its a get req")
    res.send("<h1>Hello get req at about</h1>")
})
app.get("/contact", (req, res)=>{
    console.log("Its a get req")
    res.send("<h1>Hello get req at contact</h1>")
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})