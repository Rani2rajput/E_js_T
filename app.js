const express = require("express")
const bodyParser = require("body-parser")
const app = express();

app.get('/', function(req, res) {
    const d = new Date();
    const day = d.getDay();
    if (day == 0) {
        res.send("day is sunday")
    } else if (day == 1) {
        res.send("day is monday")
    } else if (day == 2) {
        res.send("day is tuseday")
    } else if (day == 3) {
        res.send("day is wednesday")
    } else if (day == 4) {
        res.send("day is thursday")
    } else if (day == 5) {
        res.send("day is friday")
    } else {
        res.send("day is saterday")
    }
});

app.listen(4000, function() {
    console.log("running")
})