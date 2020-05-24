const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "We must have a name for this project! It is required."
        ],
    },
    email: {
        type: String,
        required: [
            true,
            "We need to be able to reach you! Email is required."
        ],
    },
    password: {
        type: String,
        required: [
            true,
            "A unique password is required."
        ],
    },
    confirm: {
        type: String,
    },
}, {timestamps: true});
module.exports.User = mongoose.model("User", UserSchema)
