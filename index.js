const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5080;

app.use(express.json());
app.use(cors());

const managerRoute = require("./routes/managerRoute");
const jobRoute = require("./routes/jobRoute");
const candidateRoute = require("./routes/candidateRoute");
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");

app.use("/manager", managerRoute);
app.use("/jobs", jobRoute);
app.use("/candidates", candidateRoute);
app.use("/user", userRoute);
app.use("/admin", adminRoute);

mongoose.connect(
    "mongodb+srv://nafiz003:Nafiz%401199@cluster0.3t2vk.mongodb.net/?retryWrites=true&w=majority",
    () => {
        console.log("Database is connected");
    }
);

app.get("/", (req, res) => {
    res.send("Job Portal Server is running.");
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
