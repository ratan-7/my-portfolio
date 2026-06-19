const express = require("express")
const router = express.Router();

const { createContact, deleteContact, markAsRead, getAllMessage } = require("../controllers/contactController")
const { verifyToken } = require("../middleware/verifyToken")

router.get("/", verifyToken, getAllMessage)
router.post("/", createContact)
router.delete("/:id", verifyToken, deleteContact)
router.put("/:id/read", verifyToken, markAsRead)

module.exports = router