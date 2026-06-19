const Contact = require("../models/Contact")


exports.getAllMessage = async (req, res) => {
    try {
        const contacts = await Contact.find()
        if (contacts.length == 0) {
            return res.status(400).json({
                message: "no contact found"
            });
        }
        res.status(200).json(contacts)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.createContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const contact = new Contact({
            name, email, subject, message
        });
        await contact.save();
        res.status(200).json({
            message: "message sent successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteContact = async (req, res) => {
    try {
        const contactId = await Contact.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "message deleted successfully!!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.markAsRead = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, { isRead: true }, { new: true })
        res.status(200).json(contact)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}