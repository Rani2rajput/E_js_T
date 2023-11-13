const express = require("express")
const bodyParser = require('body-parser')
const app = express();

app.set('views engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/', function(req, res) {
    res.render('list', {})

})

app.listen(3000, function() {
    console.log("server started")
})