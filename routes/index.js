var express = require('express');
var router = express.Router();

router.get('/categories', async function(request,response,next){
    response.render("../views/categories/index");
});
router.get('/products', async function(request,response,next){
    response.render("../views/products/index");
});

module.exports=router;