let express = require("express");
let path = require('path');
let handlerbars = require("express-handlebars").create;
let catalogController = require("./controllers/catalogController");

let app = express();
app.engine(".hbs", handlerbars({
    extname: ".hbs",
}).engine);
app.set("view engine", ".hbs");
app.set('views', path.join(__dirname, '/views'));

app.get("/", (req, res) => {
    res.render('home');
});

app.get('/catalog', catalogController.catalog);
app.get("/catalog/:productId", catalogController.details);

app.listen(3000, () => console.log("Server listen on port 3000..."));


