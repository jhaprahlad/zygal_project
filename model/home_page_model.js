const mongoose = require("mongoose");
// require('mongoose-type-email');
// const validator = require("validator");
const HomePageSchema = new mongoose.Schema(
    {
      textSubmit:{
        type:String,
        required:[true, "text is required"],
        trim:true
      }
    },
    { timestamps: true }
);

module.exports = mongoose.model("homepage", HomePageSchema);
