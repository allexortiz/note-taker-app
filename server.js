const express = require('express');
const routes = require('./routes');

const port = process.env.PORT || 3001

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use the defined routes
app.use(routes);

// Start the server
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${port}`)
);
