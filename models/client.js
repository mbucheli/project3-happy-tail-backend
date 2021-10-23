const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
    petName: String,
    imageLink: String,
    service: String,
    schedule: String,
    clientsName: String,
    petNeeds: String
});

const Client = mongoose.model("Client", ClientSchema);
module.exports = Client;