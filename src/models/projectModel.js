import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: 'No description'
    },
    status: {
        type: Boolean,
        default: true
    },
    create_at: {
        type: Date,
        default: Date.now
    }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;