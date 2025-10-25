// import { read, readFile } from "fs";
import fs from "fs/promises";

// console.log("reading file....")
// let  a = await fs.readFile("Husnain2.txt")
// console.log("update file....")
// // await fs.writeFile("Husnain2.txt", "\n\n\n\n\n\n\nLast kjri3fi3")
// // console.log("show file....")
// await fs.appendFile("Husnain2.txt", "start\n\n\n\n\n\n\nLast kjri3fi3")
// console.log("show file....")
// console.log(a.toString());
// await fs.writeFile("teset.py",`print("Hello word")`)
let a = await fs.readFile("teset.py");
console.log(a.toString());

// console.log("show file....")