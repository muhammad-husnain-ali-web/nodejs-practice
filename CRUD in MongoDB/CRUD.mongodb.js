use("CRUD");

// console.log(db);
// db.createCollection("course");

// db.course.insertOne({
//     "Movie": "Sikander1", 
//     "Link": "www.sikender.com"
// })

// db.course.insertMany([
//     {
//         "Movie": "Deva", 
//         "Link": "www.Deva.com"
//     },
//     {
//         "Movie": "OM", 
//         "Link": "www.OM.com"
//     }
// ])

// let a = db.course.find()
// console.log(a)


// let a = db.course.find({Movie:"OM"})
// console.log(a)
// console.log(a.count())

// let a = db.course.findOne({Movie:"OM"})
// console.log(a)
// console.log(a.count())

// db.course.updateOne({Movie: "Sikander1"}, {$set:{Movie: "Sikander2"}})

// db.course.updateMany({Movie: "OM"}, {$set:{Movie: "OM3"}})


// db.course.deleteOne({Movie:"Sikander2"})

db.course.deleteMany({Movie:"OM3"})

