import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res)=>{
    console.log("GET req")
    res.send("Hello GET")
})

app.post("/", (req, res)=>{
    console.log("post req")
    console.log(req.body)
    res.send("Hello POST")
})


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})