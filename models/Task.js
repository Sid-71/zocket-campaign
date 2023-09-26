const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = mongoose.Schema({
  name : {type : String},
  platform : {type : String},
  desription : {type : String},

})


module.exports = mongoose.model('Task', taskSchema);