var express = require('express');
var router = express.Router();
var user = require("../controllers/UserController");

router.get('/',async function(request, response,next){
    response.render('./users/login',{title:'WareHouse Management', message:''});
});

router.post('/',async function(request,response){
    await user.login(request,response);
});

router.get('/login',async function(request, response,next){
    response.render('./users/login',{title:'WareHouse Management', message:''});
});

router.post('/login',async function(request,response){
    await user.login(request,response);
});

router.get('/register',async function(request, response,next){
    response.render('./users/register',{title:'WareHouse Management', message:''});
});

router.post('/register',async function(request,response){
    await user.register(request,response);
});

module.exports=router;