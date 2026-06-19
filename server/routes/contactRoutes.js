const express = require("express")
const router = express.Router();

const { createContact, deleteContact, markAsRead, getAllMessage } = require("../controllers/contactController")

router.get("/contact", getAllMessage)
router.post("/contact", createContact)
router.delete("/contact/:id", deleteContact)
router.put("/contact/:id/read", markAsRead)

module.exports = router