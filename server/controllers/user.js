const userModel = require("../models/userModel")
const bcrypt =require("bcrypt")
const jwt =require("jsonwebtoken")
const nodemailer = require('nodemailer');
exports.createUser = async (req,res)=>{
//     const hashedPassword = await bcrypt.hash(req.body.password, 10)
//     try {
//         const registerUser = new userModel({
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             email: req.body.email,
//             password: hashedPassword,
//             phone: req.body.phone,
//             avatar:req.body.avatar
//         })
//         await registerUser.save()
    
//         res.status(201).json({
//             success:true,
//             message:"User created successfully",
//             registerUser
//         })
//     } catch (error) {
//         res.status(500).json({
//             success:false,
//             error
//         })
//     }
const {firstName, lastName, email, password, phone,avatar} = req.body
try {
    const existingUser= await userModel.findOne({email})
    if (existingUser) {
        return res.status(400).json({
            success:false,
            msg:"Email already exist, please use another email"
        })
    }
    const hashedPassword=await bcrypt.hash(password,10)

    
    const result = await userModel.create({
        firstName:firstName,
        lastName:lastName,
        email:email,
        phone:phone,
        password:hashedPassword,
        avatar:avatar
    })
    const token =jwt.sign({
      email:result.email,
      id:result._id
    },
     process.env.JWT_SECRET
    )
    res.status(201).json({
        success:true,
        result,
        token
    })
} catch (error) {
    res.status(500).json({
    success:false,
    error
    })
}
}


exports.loginUser =async(req, res)=>{
    const {email, password} =req.body;
    try {
        const existingUser = await userModel.findOne({email})
        if (!existingUser) {
            return res.status(404).json({
                success:false,
                msg:"User not found, please register first"
            })
        }
    const matchedPassword= await bcrypt.compare(password,existingUser.password)
    if (!matchedPassword) {
        return res.status(409).json({
            success:false,
            msg:"invalid credentials"
        })
        
    }
    const token=jwt.sign(
        {
          email: existingUser.email,
          id: existingUser._id,
          password:existingUser.password
        },
        process.env.JWT_SECRET
    )
    res.status(200).json({
        success:true,
        msg:"User logged in successfully",
        token
    })
    } catch (error) {
        
    }

}

exports.forgotPassword = async (req, res) =>{
const {email}=req.body 
const existingUser = await userModel.findOne({email})
if (!existingUser) {
    return(
        res.status(404).json({
          success :false,
          msg:"email is not found"
        })
    )
}
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mabrarqadri3@gmail.com',
    pass: 'jkkf dxio rbfn rsig'
  }
});

var mailOptions = {
  from: 'mabrarqadri3@gmail.com',
  to: existingUser.email,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}

exports.getAllUsers =async (req, res) =>{
    const data =await userModel.find().sort({createdAt:-1})
    res.status(200).json({
        success:true,
        data
    })
}

exports.getSingleUser = async (req,res) =>{
    const {id}= req.params
    const user = await userModel.findById(id)
    res.status(200).json({
        success: true,
        user

    })
}
exports.deleteUser = async (req, res) =>{
    const {id} = req.params;
    await userModel.findByIdAndDelete(id)
    res.status(200).json({
        success:true,
        msg: `User with this id ${id} has been deleted successfilly`
    })
}
exports.updateUser = async (req,res) =>{
    const {id} = req.params
    const body = req.body;
    const updatedUser = await userModel.findByIdAndUpdate(id, body, {new: true})
    res.status(200).json({
        success:true,
        updatedUser
    })
}



// module.exports = createUser