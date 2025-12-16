const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Enable CORS for all origins (development-friendly)
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
    res.json({ message: `Express server running on port ${PORT}` });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
