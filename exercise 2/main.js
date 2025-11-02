import mongoose from "mongoose"
import express from "express"
import { Employee } from "./models/Employee.js";

const app = express()
const port = 3000

function generateRandom(arr)
{
    let i = Math.floor(Math.random()*arr.length)
    return arr[i];
}

let conn = await mongoose.connect("mongodb://localhost:27017/Company");

app.set('view engine', 'ejs');

app.get("/", (req, res)=>{
    console.log("hit on index")
    res.render("index");
})

app.get("/generate", async (req, res)=>{
    let names = ["Husnain", "Harry", "Ali", "Ahmad"]
    let languages = ["Python", "JavaScrip", "Java", "C++"]
    let citys = ["Burewala", "Lahore", "Karachi", "Islamabad"]
    console.log("Generate hit .......")
    await Employee.deleteMany();
    for (let i = 0; i < 10; i++) {
        const employee =  await Employee.create({
            name: generateRandom(names),
            salary: Math.floor(Math.random()*(70000-20000+1)) +20000,
            language: generateRandom(languages),
            city: generateRandom(citys),
            IsManager: (Math.random()>0.5)?true:false,
        })
        employee.save();
    }
    res.send("Ok");
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})
