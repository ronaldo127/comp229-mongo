const config = require('./development');
const mongoose = require('mongoose');

module.exports = () => {
    const db = mongoose.connect(config.db);
    require('../app/models/user.server.model');
    return db;
};
