const Skill = require("../models/Skill")

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