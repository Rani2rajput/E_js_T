const express = require("express")
const bodyParser = require("body-parser")
const app = express();

app.set('view engine', 'ejs');
var daytext = "";

app.get('/', function(req, res) {
    const d = new Date();
    const day = d.getDay();
    if (day == 5 || day == 1)
        daytext = "wekend";

    else
        daytext = "weekday";
    res.render('list', { dayej: daytext })

});

app.listen(4000, function() {
    console.log("running")
})