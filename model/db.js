var mongoose = require('mongoose');
var db = process.env.MONGODB_URI ||  'mongodb://localhost/testproject';
mongoose.connect(db);