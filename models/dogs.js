const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
    breedId: { type: Types.ObjectId, ref: 'Breeds' },
    image: {type: String},
});

module.exports = model("Dogs", schema);