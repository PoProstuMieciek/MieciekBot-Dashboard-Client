const mongoose = require('mongoose');
const Music = require('../lib/music.js');

const SavedQueueSchema = mongoose.Schema({
    serverID: String,
    name: String,
    urls: [String]
});

module.exports = mongoose.model('SavedQueue', SavedQueueSchema);