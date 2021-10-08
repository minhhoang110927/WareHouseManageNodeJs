var Category = require('../models/Category');
var Product = require('../models/Product');
var categoryController = {};

categoryController.list = async function(request, response) {
    Category.find({}).exec(async function(err, categories) {
        if(err) {
            console.log("Error", err);
        } else {
            response.render("../views/categories/index", { categories: categories});
        };
    });
};

categoryController.show = async function(request, response) {
    Category.findOne({_id: request.params.id})
    .exec(async function(err, category){
        Product.find({categoryID: request.params.id}).exec(async function(err, products) {
        if(err) {
            console.log("Error", err);
        } else {
            response.render("../views/categories/show", {category: category, products: products});
        };
    });
    });
};

categoryController.create = async function(request, response){
    var category = new Category(request.body);
    category.save(async function(err) {
        if(err) {
            console.log(err);
            console.log('loi roi');
            response.render("../views/categories/create");
        } else {
            console.log('ko loi');
            response.redirect("/categories/show/" + category._id);
        };
    });
};

categoryController.edit = async function(request, response) {
    Category.findOne({_id: request.params.id}).exec(async function(err, category){
        if(err) {
            console.log("Error:", err);
        } else {
            response.render("../views/categories/edit",{category: category});
        };
    });
};

categoryController.update = async function(request, response) {
    Category.findByIdAndUpdate(request.params.id, {
        $set: {
            categoryName: request.body.categoryName, 
            update_date: Date.now()
        }
    }
    ,async function(err, category){
        if(err) {
            console.log(err);
            response.render("../views/categories/edit", {category: request.body});
        };
        response.redirect("/categories/show/" + category._id);
    });
};

categoryController.delete = async function(request, response) {
    Category.remove({_id: request.params.id}, async function(err){
        if(err) {
            console.log(err);
        }
        else {
            console.log("Category Deleted!");
            response.redirect("/categories");
        };
    });
};


module.exports = categoryController;