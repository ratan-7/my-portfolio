const Settings = require("../models/Setting")

exports.getSettings = async (req, res) => {
    try {

        const settings = await Settings.findOne();

        res.status(200).json({
            success: true,
            settings
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.updateSettings = async (req, res) => {
    try {

        const {
            resumeUrl,
            github,
            linkedin,
            leetcode,
            email,
            phone
        } = req.body;

        let settings = await Settings.findOne();

        if (!settings) {

            settings = await Settings.create({
                resumeUrl,
                github,
                linkedin,
                leetcode,
                email,
                phone
            });

        } else {

            settings.resumeUrl = resumeUrl || settings.resumeUrl;
            settings.github = github || settings.github;
            settings.linkedin = linkedin || settings.linkedin;
            settings.leetcode = leetcode || settings.leetcode;
            settings.email = email || settings.email;
            settings.phone = phone || settings.phone;

            await settings.save();
        }

        res.status(200).json({
            success: true,
            settings
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};