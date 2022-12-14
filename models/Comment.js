const mongoose = require('mongoose')
require('../config/db.connection')

const commentSchema = new mongoose.Schema ({
    body: String,
    post: {
        type: mongoose.Types.ObjectId,
        ref: "Post",
    },
    user: {
        type: String,
        ref: "User",
      },
},
{timestamps: true})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment