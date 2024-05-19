const express = require('express');

const app = express();
const port = 8000;
const getRoutes = require('./src/routes/getRoutes');

// Middleware to parse JSON bodies and URL-encoded data
app.use(express.json());

// Apply routes after middleware
app.use('/', getRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
