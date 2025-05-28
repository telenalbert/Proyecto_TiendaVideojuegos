const {Product} = require("../models");
console.log("Product;", Product);

const ProductController = {
    async create(req,res){
        try{
            const product = await Product.create(req.body);
            res.status(201).send({ msg: "Producto creado con éxito!", product});
        }
        catch(error) {
            console.log("Error al crear producto:", error);
            res.status(500).send(error)
        }
    }
};

module.exports = ProductController