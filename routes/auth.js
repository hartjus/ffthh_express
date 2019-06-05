var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

const models = require('../models');

router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await models.user.findOne({ where: { email, password } });

        if (!user) {
            res.status(401);
            res.send('Unauthorized');
            return;
        }

        const tokenData = {
            iss: 'axian.ffthh',
            aud: 'ffthh',
            usr: user.email,
            nam: user.name,
            exp: new Date().setTime(new Date().getTime() + (60 * 60 * 1000)) // 1 hour
        };

        //TODO: Use a secure certificate to sign the token!!!
        const cert = 'ffthh';
        const token = jwt.sign(tokenData, cert);

        res.send({token});


    } catch (e) {
        console.log(e);
        res.status(500);
        res.send(e);
    }
});

router.get('/logout', (res, req, next) => {
    res.send('Good bye!');
});

module.exports = router;
