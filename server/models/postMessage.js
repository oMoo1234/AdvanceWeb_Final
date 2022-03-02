import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
    username: String,
    password: String,
    createdAt:{
        type: Date,
        default: new Date()
    }

});
const PostMessage = mongoose.model('postMessage', postSchema);
export default PostMessage;