const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config();

exports.signUpUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name, email, password: hashPassword, role
        });
        await user.save();
        res.status(200).json({
            message: "User registered successfully!", user: user
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.API_SECRET, { expiresIn: '7d' });
        res.status(200).json({
            accesToken: token, message: "User login Successfully!"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}