const Router = require('express');
const User = require('../models/User.js');

const router = new Router();


router.post('/registration', async (req, res) => {
    try {
        const {email, password} = req.body;

        const candidate = await User.findOne((email));

        if(candidate) {
            return res.status(400).json({message:'Данный Email уже зарегистрированн.'});
        }
        const user = new User({
            email,password
        })
        await user.save();
        res.status(201).json({message:'Пользователь создан'});

    }catch (e) {
        console.log(e);
        res.send({message:"Server error"});
    }
})

module.exports = router