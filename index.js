const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8000;
const getRoutes = require('./src/routes/getRoutes');
let connectToDatabase = require("./dbConnect")

// Middleware to parse JSON bodies and URL-encoded data
app.use(express.json());

// Apply routes after middleware
app.use('/', getRoutes);

mongoose.set("strictQuery", false);
connectToDatabase();

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
