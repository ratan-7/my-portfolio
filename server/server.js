const express = require('express')
const connectDB = require('./config/db.js')
const app = express()
const port = 3000;
const authRoutes = require("./routes/authRoutes.js")
const projectRoutes = require("./routes/projectRoutes.js")
const skillRoutes = require("./routes/skillRoutes.js")
const experieceRoutes = require("./routes/experienceRoutes.js")
const educationRoutes = require("./routes/educationRoutes.js")
const certificateRoutes = require("./routes/certificateRoutes.js")
const contactRoutes = require("./routes/contactRoutes.js")
const settingsRoutes = require("./routes/settingsRoutes.js")
const analyticsRoutes = require("./routes/analyticsRoutes.js")

app.use(express.json());
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/experiences", experieceRoutes);
app.use("/api/educations", educationRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/settings", settingsRoutes)
app.use("/api/analytics", analyticsRoutes)

app.get('/', (req, res) => {
    res.send("hello jee");
});

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
})
