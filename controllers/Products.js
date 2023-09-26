const Product = require("../models/Product");


const createProduct = async(req,res)=>{
    try {
        const payload = req.body;
        const data = await Product.create(payload);
        res.status(201).send({
            message : "Product is created",
            data : data
        })
    } catch (error) {
        res.status(400).send({
            error : error.message,
            stack : error.stack
        })
    }
}

const getProduct = async(req,res)=>{
    try {
        const data = await Product.find();
        
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({
            error : error.message,
            stack : error.stack
        })
    }
}

module.exports = {
    createProduct,
getProduct

}