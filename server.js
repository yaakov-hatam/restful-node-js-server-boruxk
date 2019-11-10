const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3201;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    if (process.env.debug) {
        console.log({
            method: req.method,
            path: req.path,
            originalUrl: req.originalUrl,
            body: req.body,
            params: req.params,
            query: req.query,
            url: req.url
        })
    }
    next();
});

const phoneRouter = require('./routes/phone');
const tokenRouter = require('./routes/token');
app.use('/phone', phoneRouter);
app.use('/token', tokenRouter);

app.listen(process.env.PORT || PORT, () =>
    console.log(`App listening on port ${PORT}!`),
);