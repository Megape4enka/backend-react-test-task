const { Schema, model } = require("mongoose");

const schema = new Schema({
    title: { type: String },
    breed: { type: String }
});

module.exports = model("Breeds", schema);