const productModel = require("../models/productModel")

exports.createProduct = async (req,res)=>{
    try {
        const addProduct = new productModel({
            title: req.body.title,
            desc: req.body.desc,
            price: req.body.price,
            selectedFile: req.body.selectedFile,
           
        })
        await addProduct.save()
    
        res.status(201).json({
            success:true,
            message:"User created successfully",
            addProduct
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error
        })
    }
}

exports.getProducts =async (req, res) =>{
    const Products =await productModel.find().sort({createdAt:-1})
    res.status(200).json({
        success:true,
        Products
    })
}

exports.getSingleProduct = async (req,res) =>{
    const {id}= req.params
    const Product = await productModel.findById(id)
    res.status(200).json({
        success: true,
        Product

    })
}
exports.deleteProduct = async (req, res) =>{
    const {id} = req.params;
    await productModel.findByIdAndDelete(id)
    res.status(200).json({
        success:true,
        msg: `User with this id ${id} has been deleted successfilly`
    })
}
exports.updateProduct = async (req,res) =>{
    const {id} = req.params
    const body = req.body;
    const updatedProduct = await productModel.findByIdAndUpdate(id, body, {new: true})
    res.status(200).json({
        success:true,
        updatedProduct
    })
}
