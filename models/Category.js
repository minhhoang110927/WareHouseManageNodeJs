var mongoose = require('mongoose');
var Product = require('../models/Product');
var schemaCategory = new mongoose.Schema({
    categoryName: String,
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});
module.exports = mongoose.model('Category', schemaCategory);