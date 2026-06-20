const Project = require("../models/Project.js")
const cloudinary = require("../config/cloudinary");
exports.getAllProject = async (req, res) => {
    try {
        const projects = await Project.find();
        if (projects.length == 0) {
            return res.status(200).json({
                success: true,
                message: "not found any post"
            });
        }
        res.status(200).json({
            success: true,
            projects
        })
    } catch (error) {
        res.status(500).json({
            message: "post not found", message: error.message
        })
    }
}

exports.createProject = async (req, res) => {
    try {
        const { title, description, skills, image, url } = req.body;
        const result = await cloudinary.uploader.upload(
            req.file.path
        );
        const skillsArray = skills
            .split(",")
            .map(skill => skill.trim());
        const project = new Project({
            title, description, skills: skillsArray, image: result.secure_url, url
        })
        await project.save();
        res.status(200).json({
            message: "project created successfully!", project: project
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteProject = async (req, res) => {
    try {
        const projectId = await Project.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "project delete successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.updateProject = async (req, res) => {
    try {

        const { title, description, skills, url } = req.body;

        const updateData = {
            title,
            description,
            url
        };

        if (skills) {
            updateData.skills = skills
                .split(",")
                .map(skill => skill.trim());
        }

        if (req.file) {

            const result = await cloudinary.uploader.upload(
                req.file.path
            );

            updateData.image = result.secure_url;
        }

        const project = await Project.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Project updated successfully",
            project
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};