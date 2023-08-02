import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true, min: 3, max: 50 },
    desc: { type: String, required: true, min: 5, max: 500 },
    date: { type: Date },
    done: { type: Boolean, default: false },

}, { timestamps: true });

export default mongoose.model('Task', TaskSchema);