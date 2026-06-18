const Experience = require("../models/Experience")

exports.getAllExperience = async (req, res) => {
    try {
        const experieces = await Experience.find();
        if (experieces.lengthl == 0) {
            return res.status(400).json({
                message: "experience not found"
            })
        }
        res.status(200).json(experieces)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


exports.addExperience = async (req, res) => {
    try {
        const { title, company, location, startDate, endDate, currentWorking, description, skills } = req.body;
        const experience = new Experience({
            title, company, location, startDate, endDate, currentWorking, description, skills
        })
        await experience.save();
        res.status(200).json({
            message: "experiece added successfully", experience: experience
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteExperience = async (req, res) => {
    try {
        const experieceId = await Experience.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "experience deleted successfully!"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.updateExperience = async (req, res) => {
    try {
        const experieceId = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            message: "update experience successfully!!!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}