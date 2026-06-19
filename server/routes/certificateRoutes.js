const express = require("express")
const router = express.Router();
const { addCertificate, deleteCertificate, updateCertificate, getAllCertificate } = require("../controllers/certificateController")
const { verifyToken } = require("../middleware/verifyToken")

router.get("/", getAllCertificate)
router.post("/", verifyToken, addCertificate)
router.delete("/:id", verifyToken, deleteCertificate)
router.patch("/:id", verifyToken, updateCertificate)

module.exports = router;