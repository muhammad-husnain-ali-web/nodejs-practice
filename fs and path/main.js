const fs = require("fs")

// console.log(fs)

console.log("Starting........")
// fs.writeFileSync("Husnain.txt", "Husnain is a good boy");
// fs.writeFile("Husnain2.txt", "Husnain Ali",()=>{
//     console.log("Done")
    // fs.readFile("Husnain2.txt", (error, data)=>{
    //     console.log(error, data.toString());
    //     console.log("read file")
    // })
// })
    fs.appendFile("Husnain2.txt", "\nHusnain is good boy",  (e, d)=>{
        console.log("Append");
        fs.readFile("Husnain2.txt", (error, data)=>{
            console.log(error, data.toString());
            console.log("read file")
        })
    })

console.log("Ending")