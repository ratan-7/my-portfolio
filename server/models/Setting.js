const { Schema, model } = require("mongoose")

const SettingSchema = new Schema(
    {
        resumeUrl: {
            type: String,
            default: ""
        },

        github: {
            type: String,
            default: ""
        },

        linkedin: {
            type: String,
            default: ""
        },

        leetcode: {
            type: String,
            default: ""
        },

        email: {
            type: String,
            default: ""
        },

        phone: {
            type: String,
            default: ""
        }
    },
    { timestamps: true }
)

const SettingModel = model("setting", SettingSchema)
module.exports = SettingModel