const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 8000;
const getRoutes = require('./src/routes/getRoutes');
let connectToDatabase = require("./dbConnect")

// Middleware to parse JSON bodies and URL-encoded data
app.use(express.json());

app.use(cors()); // This will allow all origins

// Apply routes after middleware
app.use('/', getRoutes);

mongoose.set("strictQuery", false);
connectToDatabase();

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
