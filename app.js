var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});

module.exports = app.listen();

//run using npm test