const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    console.log("Its a / req")
    res.send("shop home paige")
})

router.get("/about", (req, res)=>{
    console.log("Its a api req")
    res.send("shop About paige")
})


module.exports = router