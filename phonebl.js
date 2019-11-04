const dal = require('./dal');

function getPhones(callback) {
    dal.readAll(function (err, phonesData) {
        if (err) {
            callback(err);
        } else {
            callback(null, phonesData);
        }
    })
}

function getPhone(id, callback) {
    dal.readOne(id, function (err, runnerData) {
        if (err) {
            callback(err);
        } else {
            callback(null, runnerData);
        }
    })
}

function createPhone(runner, callback) {
    let date = new Date;
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let dateF = `${year}-${month}-${day} ${hour}:${min}`;
    runner.createdDate = dateF;
    dal.saveOne(runner, function (err, runnerData) {
        if (err) {
            callback(err);
        } else {
            callback(null, runnerData);
        }
    })
}

function editRunner(id, callback) {
    dal.editOne(id, function (err, runnerData) {
        if (err) {
            callback(err);
        } else {
            callback(null, runnerData);
        }
    })
}

function updatePhone(runner, callback) {
    let date = new Date;
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let dateF = `${year}-${month}-${day} ${hour}:${min}`;
    runner.updatedDate = dateF;
    dal.updateOne(runner, function (err, runnerData) {
        if (err) {
            callback(err);
        } else {
            callback(null, runnerData);
        }
    })
}

function deletePhone(runner, callback) {
    dal.deleteOne(runner, function (err, runnerData) {
        if (err) {
            callback(err);
        } else {
            callback(null, runnerData);
        }
    })
}

module.exports.getPhones = getPhones;
module.exports.getPhone = getPhone;
module.exports.createPhone = createPhone;
module.exports.updatePhone = updatePhone;
module.exports.deletePhone = deletePhone;