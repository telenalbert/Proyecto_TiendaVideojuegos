const {Category} = require('../models/index.js');

const CategoryController =  {
    async create(req, res) {
        try {
            const category = await Category.create(req.body);
            res.status(201).send ({msg: 'Category created', Category});
        } catch(error) {
            console.log("Error al crear producto", error);
            res.status(500).send({error: 'Error when creating category', error})
        }
    }
}

module.exports = CategoryController