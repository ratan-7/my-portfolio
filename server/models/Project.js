const { Schema, model } = require("mongoose")

const PostSchema = new Schema({
    title: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true
    },
    skills: [{
        type: String,
        required: true
    }],

    image: {
        type: String,

    },
    url: {
        type: String,

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const PostModel = model("post", PostSchema);
module.exports = PostModel