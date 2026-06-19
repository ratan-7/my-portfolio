const Education = require("../models/Education")

exports.getAllEducation = async (req, res) => {
    try {
        const educations = await Education.find();
        if (educations.length == 0) {
            return res.status(400).json({
                message: "Education not found"
            });
        }
        res.status(200).json(educations)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.addEducation = async (req, res) => {
    try {
        const { school, degree, field, startDate, endDate, currentlyWorking, grade, description, skills } = req.body;
        const education = new Education({
            school, degree, field, startDate, endDate, currentlyWorking, grade, description, skills
        });
        await education.save();
        res.status(200).json({
            message: "Education added successfully!!"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteEducation = async (req, res) => {
    try {
        const educationId = await Education.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Education deleted successfully!!"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.updateEducation = async (req, res) => {
    try {
        const educationId = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            message: "Education updated successfully!!!!!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}