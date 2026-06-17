const Skill = require("../models/Skill")


exports.getAllSkill = async (req, res) => {
    try {
        const skills = await Skill.find();
        if (skills.length == 0) {
            return res.status(400).json({
                message: "skill not found"
            });
        }
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.addSkill = async (req, res) => {
    try {
        const { name, level, catagory, icon, order } = req.body;
        const skill = new Skill({
            name, level, catagory, icon, order
        })
        await skill.save();
        res.status(200).json({
            message: "skill added successfully!", skill: skill
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteSkill = async (req, res) => {
    try {
        const skillId = await Skill.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Skill deleted successfullly!"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.updateSkill = async (req, res) => {
    try {
        const skillId = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            message: "skill updated successfully!"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}