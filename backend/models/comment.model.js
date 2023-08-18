const mongoose = require('mongoose');
const Schema = mongoose.Schema;


    const commentSchema = Schema(
        {
            Username: {
                type:String,
                required: true,
            },
            Comment: {
                type:String,
                required: true,
            },
            VideoId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Video",
            }


        }, {
        timestamps: true,
    }
    );




module.exports = mongoose.model("comment", commentSchema);