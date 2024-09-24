// First init API

import { MongoClient } from "mongodb";

const express = require('express');
const body = require('body-parser');
const cors = require('cors');

// start function to run code
async function start() {
    try {
        // Express
        const app = express();

        // CORS
        app.use(cors());

        // Mongodb connection
        const mongo = await MongoClient.connect('mongodb://localhost:27017/books_api');

        // Connection to mongodb
        await mongo.connect();

        app.db = mongo.db();

        // set limit on req size
        app.use(body.json({
            limit: '500kb'
        }));

        // set Routes


        app.use('/books', require('./routes/books'));

        // Start server on port 3000

        app.listen(3000, () => {
            console.log('Server is up and running on port 3000');
        });

    } catch(error) {
        console.log(error);
    }
}

start();

// Improvements and extra features to add
// Add more/better Validation and Error Handling
// Implement Pagination and Sorting
// Add Filtering
// Add Authentication and Authorization
// Update and Delete Operations
// Better structure for Response and Status Codes
// Add Caching
// Add Logging and Monitoring
// Add Documentation
// Write tests for Controllers and Routes to ensure API behaves as expected and to catch any issues early
// API Versioning
// Data Seeding script

// Second project: Make a Next.js site to display the books