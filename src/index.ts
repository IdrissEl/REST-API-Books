// First init API

import { MongoClient } from "mongodb";

const express = require('express');
const body = require('body-parser');

// start function to run code
async function start() {
    try {
        // Express
        const app = express();

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