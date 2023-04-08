const mongoose = require("mongoose");
const config = require("./database"); // import config object
async function connet() {
    mongoose.connect(config.database, {
        family:4
    })
        .then(() => {
            console.log('FINE');
        })
        .catch(() => {
            console.log("BAD");
        })
}

module.exports = { connet };