const express = require('express')
const connectDB = require('./config/db.js')
const app = express()
const port = 3000;
const authRoutes = require("./routes/authRoutes.js")
const projectRoutes = require("./routes/projectRoutes.js")

app.use(express.json());
connectDB();

app.use("/api", authRoutes);
app.use("/api", projectRoutes);


app.get('/', (req, res) => {
    res.send("hello jee");
});

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
})
