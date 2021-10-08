var express = require('express');
var router = express.Router();
var product = require("../controllers/ProductController.js")
var Category = require('../models/Category');

//Get all employees
router.get('/', async function(request, response) {
    product.list(request, response);
});

//Get single employee by id
router.get('/show/:id', async function(request, response) {
    await product.show(request, response);
});

//Create employee
router.get('/create', async function(request, response) {
    // response.render("./products/create");
    Category.find({}).exec(async function(err, categories) {
        if(err) {
            console.log("Error", err);
        } else {
            response.render("./products/create", { categories: categories});
        };
    });
});

//Save employee
router.post('/create', async function(request, response){
    await product.create(request, response);
});

//Edit employee
router.get('/edit/:id', async function(request, response){
    await product.edit(request, response);
});

//Edit update
router.post('/update/:id', async function(request, response) {
    await product.update(request, response);
});

//delete
router.post('/delete/:id', async function(request, response){
    await product.delete(request, response);
});

module.exports = router;