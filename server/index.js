const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

const PORT = config.get('serverPort');

const start = async () => {
    try {
        await mongoose.connect();

        app.listen(PORT, ()=> {
            console.log('server start 5000');
        })
    }catch (e) {

    }
}
start();