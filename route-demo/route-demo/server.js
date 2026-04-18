const express = require('express');
const app = express();
const PORT = 3000;

// Logger Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Root Route
app.get('/', (req, res) => {
    res.send('Welcome to Route Handling!');
});

// About Route
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1>');
});

// Route Parameter
app.get('/products/:id', (req, res) => {
    res.send(`Viewing Product ID: ${req.params.id}`);
});

// Query Route
app.get('/search', (req, res) => {
    res.send(`Searching for: ${req.query.q}`);
});

// 404 Handler
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
