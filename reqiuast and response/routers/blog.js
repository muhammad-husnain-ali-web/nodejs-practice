const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    console.log("Its a / req")
    res.send("Blog home paige")
})

router.get("/about", (req, res)=>{
    console.log("Its a api req")
    res.send("Blog About paige")
})

router.get("/blogpost/:slug", (req, res)=>{
    console.log("Its a blogpost req")
    res.send(`fetch the blogpost for ${req.params.slug}`)
})

module.exports = router