const Certificate = require("../models/Certificate")

exports.getAllCertificate = async (req, res) => {
    try {
        const certificates = await Certificate.find();
        if (certificates.length == 0) {
            return res.status(400).json({
                message: "certificate not found"
            });
        }
        res.status(200).json(certificates)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.addCertificate = async (req, res) => {
    try {
        const { title, issuer, issueDate, certificateUrl, image } = req.body;
        const certificate = new Certificate({
            title, issuer, issueDate, certificateUrl, image
        })
        await certificate.save();
        res.status(200).json({
            message: "Certificate added successfully!!!!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteCertificate = async (req, res) => {
    try {
        const certificateId = await Certificate.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "certificate deleted successfully!!"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.updateCertificate = async (req, res) => {
    try {
        const certificateId = await Certificate.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            message: "Certificate Updated successfully!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}