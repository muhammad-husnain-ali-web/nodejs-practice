"use server"
import fs from 'fs/promises'
export const SubmitAction = async (e) =>{
    console.log(e.get("name"), e.get("add"))
    await fs.appendFile("Herry.txt", `Name is ${e.get("name")}\nand Address is ${e.get("add")}\n`)
  }

