var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  student_id : String,
  name       : String,
  ic_number  : String,
  year_join  : Number,
  subject    : {
    type: mongoose.Schema.Types.ObjectId,
    ref : "Subject"
  }

});

module.exports = mongoose.model('Student', studentSchema);