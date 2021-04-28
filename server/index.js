const express = require('express');
const mongoose = require('mongoose');


const app = express();


const PORT = 5000;
const dbUrl = "mongodb+srv://partner:partner123@partner-service.v3mef.mongodb.net/partner?retryWrites=true&w=majority"

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
        console.log(e);
    }
}
start();