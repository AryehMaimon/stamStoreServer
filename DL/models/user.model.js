const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  companyId:{
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdData : {
    type: Date,
    default: Date.now()
  },
  permission : {
    type : String, 
    enum : ['user', 'admin'],
    default : 'user'
  }
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;

