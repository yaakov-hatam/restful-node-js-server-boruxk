const express = require('express');
const router = express.Router();
const tokenBl = require('./../tokenbl');

router.post('/', (req, res) => {
    let newUser = req.body;
    
    tokenBl.createToken(newUser, function (e) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(newUser);
        }
    })
});

module.exports = router;