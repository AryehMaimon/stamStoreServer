const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
   item: {
        type: String,
        required: true,
      },
img:{
    type: String,
    required: true,
},
category:{
    type: String,
    required: true,
},
barcode:{
    type: String,
    required: true,
},
size:{
    type: String,
    
},
quantity:{
    type: Number,
    required: true,
    default: 0,
},
price:{
    type: Number,
    required: true,
},
description:{
    type: String,
},
isActive:{
    type: Boolean,
    default: true
},
amountInCart:{
    type: Number,
    required: true,
    default: 0
}

})
const storeModel = mongoose.model("store", storeSchema);
module.exports = storeModel;