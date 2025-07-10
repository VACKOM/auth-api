import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: {type: String, require: true},
    completed: {type: Boolean, default:false},
})

export default mongoose.model('Task', taskSchema);