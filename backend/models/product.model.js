const mongoose = require('mongoose');
const Schema = mongoose.Schema;


    const productSchema = Schema(
        {
            LinkProduct: {
                type:String,
                required: true,
            },
            Title: {
                type:String,
                required: true,
            },
            Price: {
                type:Number,
                required: true,
            },
            VideoId: [{ type: mongoose.Types.ObjectId, ref: "Video", required: true }],


        }, {
        timestamps: true,
    }
    );

   


module.exports = mongoose.model("product", productSchema);
