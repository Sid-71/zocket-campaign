const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campaignSchema = mongoose.Schema({
  campaignName : {type : String},
  startDate : {type : Date, default : new Date()},
  endDate : {type : Date, default : new Date()},
  clicks : {type : Number,default : 0},
  location : {type : String},
  platform : {type : String},
  status : {type : Number},  // 0->live now , 1->paused, 2->exhausted
  budget : {type : Number},
  targetRadius : {type : Number},
  image : {type : String},
  description : {type : String},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  isOn : {type : Boolean, default : false}

},{timestamps : true})


module.exports = mongoose.model('Campaign', campaignSchema);