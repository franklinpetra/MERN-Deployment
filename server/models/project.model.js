const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Please create a project title. This is a required field!."
        ],
        minlength: [
            3,
            "Project title is too short! Please create one longer than 3 characters.",
        ],
    },
    date: {
        type: Date,
        required: [
            true,
            "Completion due date is required."
        ],
    },
    status: {
        type: Number,
        required: [
            false,
            "We require a status of 0 = Backlog, 1 = In Progress and 2 = Completed."
        ],
    },
}, {timestamps: true});
module.exports.Project = mongoose.model("Project", ProjectSchema)
