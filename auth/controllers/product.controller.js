const Company = require('../models/company.js');
const Product = require('../models/product.js');

exports.findAll = (req, res) => {

    Product.find()
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// Find a Products by Name
exports.findByName = (req, res) => {
    Product.findOne({ name: req.params.productName })
        .populate('company')
        .exec(function (err, product) {
            if (err) {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Products not found with given name " + req.params.productName
                    });
                }
                return res.status(500).send({
                    message: "Error retrieving Products with given Company Id " + req.params.productName
                });
            }

            res.send(product);
        });
};

// Find all products by a CompanyId
exports.findByCompanyId = (req, res) => {
    Product.find({ company: req.params.companyId })
        .exec(function (err, products) {
            if (err) {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Products not found with given Company Id " + req.params.companyId
                    });
                }
                return res.status(500).send({
                    message: "Error retrieving Products with given Company Id " + req.params.companyId
                });
            }

            res.send(products);
        });
};

exports.addProduct = (req, res) => {
    Product.create(req.body, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
}


exports.findProductById = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) throw err;
        res.send(product);
    })
};

exports.removeById = (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, product) => {
        if (err) throw err;
        res.send(product);
    })
}

exports.updateById = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, (err, product) => {
        if (err) throw err;
        res.send(product);
    })
}
