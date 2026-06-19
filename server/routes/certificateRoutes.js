const express = require("express")
const router = express.Router();
const { addCertificate, deleteCertificate, updateCertificate, getAllCertificate } = require("../controllers/certificateController")
const { verifyToken } = require("../middleware/verifyToken")
const upload = require("../middleware/upload")

router.get("/", getAllCertificate)
router.post("/", verifyToken, upload.single("image"), addCertificate)
router.delete("/:id", verifyToken, deleteCertificate)
router.patch("/:id", verifyToken, upload.single("image"), updateCertificate)

module.exports = router;