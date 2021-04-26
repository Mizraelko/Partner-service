const Router = require('express');
const User = require('../models/User.js');

const router = new Router();


router.post('/registration', (req, res) => {
    try {

        const {email, password} = req.body;

        const candidate = User.findOne((email));

        if(candidate) {
            return res.status(400).json({})
        }

    }catch (e) {
        console.log(e);
        res.send({message:"Server error"});
    }
})