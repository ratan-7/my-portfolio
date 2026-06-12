const {
    Schema,
    model
} = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        default: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const UserModel = model("user", UserSchema)

module.exports = UserModel