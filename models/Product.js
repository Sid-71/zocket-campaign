const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prdouctSchema = mongoose.Schema({
  name : {type : String},
  image : {type : String},
  text : {type : String},
  price : {type : Number}
})


module.exports = mongoose.model('Product', prdouctSchema);