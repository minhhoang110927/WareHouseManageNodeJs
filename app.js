var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
//connect to mongo
mongoose.connect(`mongodb://${config.hostmongo}:${config.portmongo}/${config.db}`)
    .then(() => console.log('connection successfully'))
    .catch((err) => console.log(err));
//Router
var user = require('./routes/users');
var categories = require('./routes/categories');
var products = require('./routes/products');

var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(cookieParser());
app.use(express.static("public"));


app.use('/',user);
app.use('/categories', categories);
app.use('/products', products);

app.listen(config.port, () => {
    console.log(`Server running at ${config.host}:${config.port}`);
});