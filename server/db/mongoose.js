var mongoose = require('mongoose');

//Have mongoose use promises
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = { mongoose };
