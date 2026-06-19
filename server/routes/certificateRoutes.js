const express = require("express")
const router = express.Router();
const { addCertificate, deleteCertificate, updateCertificate, getAllCertificate } = require("../controllers/certificateController")

router.get("/get-all-certificate", getAllCertificate)
router.post("/add-certificate", addCertificate)
router.delete("/delete-certificate/:id", deleteCertificate)
router.patch("/update-certificate/:id", updateCertificate)

module.exports = router;