var mongoose = require("mongoose");

// SCHEMA SETUP
var shuffleSchema = new mongoose.Schema({
    deck_id: String,
});

//EXPORT THE MODEL

module.exports = mongoose.model("Shuffle", shuffleSchema);