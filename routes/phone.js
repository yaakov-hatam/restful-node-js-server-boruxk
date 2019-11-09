const express = require('express');
const router = express.Router();
const phoneBl = require('./../phonebl');

router.get('/', (req, res) => {
    phoneBl.getPhones(function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    phoneBl.getPhone(id, function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});

router.post('/', (req, res) => {
    let newPhoneData = req.body;
    phoneBl.createPhone(newPhoneData, function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});

router.put('/:id', (req, res) => {
    let phone = req.body;
    phoneBl.updatePhone(phone, function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    phoneBl.deletePhone(id, function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});

module.exports = router;