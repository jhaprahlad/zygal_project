const mongoose = require("mongoose");
// require('mongoose-type-email');
const validator = require("validator");
const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "email is required"],
            trim: true,
            lowercase: true,
            validate: {
                validator: function (value) {
                    return validator.isEmail(value);
                },
                message: "Email is invalid",
            },
            unique: [true, "email should not exist twice in the database"],
        },
        password: {
            type: String,
            required: [true, "password is required"],
            trim: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
