const mongoose = require('mongoose');

const welcome = new mongoose.Schema({
    guildID: { type: String, required: true },
    channelID: { type: String, required: true },

});
module.exports = mongoose.model("welcome_channel_kartof", welcome);
