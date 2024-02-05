// Load necessary modules from Node.js
const http = require('http'); // HTTP module to create an HTTP server
const url = require('url'); // URL module to parse URL strings
// const fs = require('fs'); // File System module to interact with the file system
const path = require('path'); // Path module to work with file and directory paths
const PORT = process.env.PORT || 8800; // Use the environment's port or default to 8800

// Correct the paths based on your current directory structure
const utilsPath = path.join(__dirname, 'modules', 'utils.js'); // Construct the path to utils.js
const enPath = path.join(__dirname, 'lang', 'en', 'en.json'); // Construct the path to en.json

// Require the getDate function and greeting message
const { getDate } = require(utilsPath);
const greeting = require(enPath).greeting;

// Create an HTTP server that listens for requests
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true); // Parse the request URL
    const path = parsedUrl.pathname; // Extract the pathname from the parsed URL
    const query = parsedUrl.query; // Extract the query from the parsed URL

    // Route handling starts here
    if (path === '/Comp4537Lab03/getDate/') {
        if (query.name) {
            const message = greeting.replace('%1', query.name); // Replace placeholder with name from query
            const currentTime = new Date().toString(); // Get current server time
            const responseMessage = `${message} ${currentTime}`; // Construct the response message
            res.writeHead(200, { 'Content-Type': 'text/html' }); // Set HTTP header with status code and content type
            res.end(`<p style="color: blue;">${responseMessage}</p>`); // Send the response back with HTML content
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' }); // Handle missing name query parameter
            res.end('Name is required');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' }); // Handle unrecognized paths
        res.end('Not Found');
    }
});

// Start the server on the specified port
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Log message indicating the server is running
});
