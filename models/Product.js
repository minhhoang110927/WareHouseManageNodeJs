var mongoose = require('mongoose');
var schemaProduct = new mongoose.Schema({
    productName: String,
    date: Date,
    quantity: Number,
    where: String,
    buyCost: Number,
    sellCost: Number,
    categoryID: String
});
module.exports = mongoose.model('Product', schemaProduct);