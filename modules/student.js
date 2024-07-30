const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  name : {
    type : String,
    require : true
  },
  email : {
    type : String,
    require : true,
    unique : true
  },
  password : {
    type : String,
    require : true
  },
  course  : {
    type : String,
    enum : ['math','science','english'],
    require : true
  }
})

const student = mongoose.model('student',studentSchema)
module.exports = student