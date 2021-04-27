const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();


const PORT = config.get('serverPort');

const start = async () => {
    try {
        await mongoose.connect(dbUrl , {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:true
        });

        app.listen(PORT, ()=> {
                console.log('rer')
        })

    }catch (e) {
        console.log(e.message);
    }
}
start();