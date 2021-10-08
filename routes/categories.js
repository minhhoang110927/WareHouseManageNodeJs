var express = require('express');
var router = express.Router();
var category = require("../controllers/CategoryController.js")

router.get('/', async function(request, response) {
    category.list(request, response);
});

router.get('/show/:id', async function(request, response) {
    await category.show(request, response);
});

router.get('/create', async function(request, response) {
    response.render("./categories/create");
});

router.post('/create', async function(request, response){
    await category.create(request, response);
});

router.get('/edit/:id', async function(request, response){
    await category.edit(request, response);
});

router.post('/update/:id', async function(request, response) {
    await category.update(request, response);
});

router.post('/delete/:id', async function(request, response){
    await category.delete(request, response);
});



module.exports = router;