const mongoose = require("mongoose");

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 10000,
};

const url = 'mongodb+srv://dbUsers:dbUsers@cluster0.wfswr.mongodb.net/apiDogs?retryWrites=true&w=majority';

const database = async () => {
    return mongoose
        .connect(url, options)
        .then(function () {
            console.log("MongoDB is connected");
        })
        .catch(function (err) {
            console.log(err);
        });
};

module.exports = database;