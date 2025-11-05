// console.log("Fething 1.....")
setTimeout(()=>{
    document.querySelector(".box1").innerHTML = "Hi";
}, 1000)

console.log("Fething 2.....")
setTimeout(()=>{
    document.querySelector(".box2").innerHTML = "Hey";
}, 2000)

console.log("Fething 3.....")
setTimeout(()=>{
    document.querySelector(".box3").innerHTML = "Hello";
}, 3000)

// console.log("Fething 1.....")
// setTimeout(()=>{
//     document.querySelector(".box1").innerHTML = "Hi";

//         console.log("Fething 2.....")
//         setTimeout(()=>{
//             document.querySelector(".box2").innerHTML = "Hey";

//             console.log("Fething 3.....")
//             setTimeout(()=>{
//                 document.querySelector(".box3").innerHTML = "Hello";

//             }, 1000)
//         }, 1000)
//     }, 1000)


console.log("Fething 1.....")
setTimeout(()=>{
    document.querySelector(".box1").innerHTML = "Hi";

        console.log("Fething 2.....")
        setTimeout(()=>{
            document.querySelector(".box2").innerHTML = "Hey";

            console.log("Fething 3.....")
            setTimeout(()=>{
                document.querySelector(".box3").innerHTML = "Hello";

            }, 3000)
        }, 2000)
    }, 1000)

