const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = 3000;

// Enable CORS for all origins (development-friendly)
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// no caching
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store');
    next(); // reminder to put NEXT
})

// allow compression
// function shouldCompress(req, res) {
//     if (req.url === '/text') {
//         console.log('response zipped');
//         return true;
//     }
//     return false;
// }

// app.use(compression({ filter: shouldCompress }));

// Simple test route
app.get('/', (req, res) => {
    res.json({ message: `Express server running on port ${PORT}` });
});

// app.get('/text', compression(), (req, res) => {
//     const filePath = path.join(__dirname, 'assets/content.txt');
//     res.sendFile(filePath, (err) => {
//         if (err) {
//             res.status(500).send('Error sending the file');
//         }
//     });
// });

// app.get('/text', (req, res) => {
//     const bigText = 'Hello world! '.repeat(100000); // ~2 KB
//     res.send(bigText);
// });

app.get('/text', compression(), (req, res) => {
    const bigText = 'Hello world! '.repeat(100000); 
    res.send(bigText);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
