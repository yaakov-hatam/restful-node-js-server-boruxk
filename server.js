const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3201;
const phoneBl = require('./phonebl');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/phone', (req, res) => {
    phoneBl.getPhones(function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});

app.get('/phone/:id', (req, res) => {
    let id = req.params.id;
    phoneBl.getPhone(id, function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});

app.post('/phone', (req, res) => {
    phoneBl.createPhone(req.body, function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});

app.put('/phone/:id', (req, res) => {
    phoneBl.updatePhone(req.body, function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.status(200).send();
        }
    })
});

app.delete('/phone/:id', (req, res) => {
    phoneBl.deletePhone(req.params.id, function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});

app.listen(PORT, () =>
    console.log(`App listening on port ${PORT}!`),
);