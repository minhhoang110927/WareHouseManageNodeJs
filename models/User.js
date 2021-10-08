var mongoose = require('mongoose');
var schemaUser = new mongoose.Schema({
    username: String,
    password: String
});
module.exports = mongoose.model('User',schemaUser);