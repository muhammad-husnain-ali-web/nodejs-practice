const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let arr = ["Harry bhai", 45, 67]
    res.render('index', {foo: 'Husnain', arr});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
