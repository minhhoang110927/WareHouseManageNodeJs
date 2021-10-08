var Category = require('../models/Category');
var Product = require('../models/Product');
var productController = {};

productController.list = async function(request, response) {
    Product.find({}).exec(async function(err, products) {
        Category.find({}).exec(async function(err, categories) {
            
        
        if(err) {
            console.log("Error", err);
        } else {
            response.render("../views/products/index", { products: products, categories: categories});
        };
    });
    });
};


productController.show = async function(request, response) {
    Product.findOne({_id: request.params.id}).exec(async function(err, product){
        if(err) {
            console.log("Error", err);
        } else {
            response.render("../views/products/show", {product: product});
        };
    });
};

productController.create = async function(request, response){
    var product = new Product(request.body);
    product.save(async function(err) {
        if(err) {
            console.log(err);
            
            response.render("../views/products/create");
        } else {
            response.redirect("/products/show/" + product._id);
        };
    });
};

productController.edit = async function(request, response) {
    Product.findOne({_id: request.params.id}).exec(async function(err, product){
        if(err) {
            console.log("Error:", err);
        } else {
            response.render("../views/products/edit",{product: product});
        };
    });
};

productController.update = async function(request, response) {
    Product.findByIdAndUpdate(request.params.id, {
        $set: {
            productName: request.body.productName, 
            date: request.body.date, 
            quantity: request.body.quantity, 
            where: request.body.where, 
            buyCost: request.body.buyCost, 
            sellCost: request.body.sellCost, 
            categoryID: request.body.categoryID, 
            update_date: Date.now()
        }
    }
    ,async function(err, product){
        if(err) {
            console.log(err);
            response.render("../views/products/edit", {product: request.body});
        };
        response.redirect("/products/show/" + product._id);
    });
};

productController.delete = async function(request, response) {
    Product.remove({_id: request.params.id}, async function(err){
        if(err) {
            console.log(err);
        }
        else {
            console.log("Product Deleted!");
            response.redirect("/products");
        };
    });
};

module.exports = productController;