const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const signup = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        if (!userName || !email || !password) {
           return  res.status(400).send({
                message: "please enter all details"
            })
        }
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).send({
                message: "User already exists"
            })
        }
        const payload = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);
        payload.password = hashedPassword;
        const userData = new User(payload);
        const saveData = await userData.save();
        const token = jwt.sign({
            email: saveData.email,
            id: saveData._id,
        }, process.env.SECRET_KEY);

        res.status(201).send({
            user: saveData,
            token: token
        });

    } catch (error) {
        res.status(400).send({
            message: error.message,
            stack: error.stack
        })
    }
}


const signin = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        if (!userName || !email || !password) {
           return  res.status(400).send({
                message: "please enter all details"
            })
        }
        const existingUser = await User.findOne({ email: email });
        if (!existingUser) {
           return  res.status(400).send({
                message: "User not found"
            })
        }

     const matchedPassword = await bcrypt.compare(password,existingUser.password);
     if(!matchedPassword){
        return res.status(400).send({
            message : "Invalid Credentials"
        })
     }

    const token = jwt.sign({email : existingUser.email,id:existingUser._id},process.env.SECRET_KEY);
      res.status(200).send({
         user : existingUser,
         token : token
      })

    } catch (error) {
        res.status(400).send({
            message: error.message,
            stack: error.stack
        })
    }
}

module.exports = {
    signin,
    signup
}