
const Video = require("../models/video.model")
const Comment = require("../models/comment.model")
const Product = require("../models/product.model")

//Create a Video 
exports.create = async (req, res, next) => {
    const { UrlImageThumbnail, Title, Username, LinkVideo  } = req.body;

    const video = new Video({
        UrlImageThumbnail,
        Title, 
        Username, 
        LinkVideo,
    });
    try {
        await video.save();
    } catch (err) {
        console.log(err)
    }
    return res.status(201).json({ video })
}


//Find All Video Video
exports.findAllVideo = async (req, res) => {
    let videos;
    try {
        videos = await Video.find()
    }
    catch (err) {
        return console.log(err)
    }

    return res.status(200).json({ videos })
}

//Edit a Video
exports.update = (req, res) => {
    const id = req.params.id;

    Video.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Video tidak ada" })
            }
            res.send({ message: "Video berhasil diupdate" })
        })
        .catch(err => res.status(500).send({ message: err.message }));
}

//Delete a Video
exports.delete = (req, res) => {
    const id = req.params.id;

    Video.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Tidak dapat menghapus Video" })
            }

            res.send({ message: "Video berhasil dihapus" })
        })

        .catch(err => res.status(500).send({ message: err.message }));

}

//find video by video id
exports.show = (req, res) => {
    const id = req.params.id;

    Video.findById(id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
}


// Post a comment by VideoId
exports.postComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, comment } = req.body;

        const commentNew = new Comment({

            Username: username,
            Comment: comment,
            VideoId: id,    
        });

        

        const video = await Video.findById(id);
        if (!video) {
            return res.status(404).json({ message: "Video not found" });
        }


        await commentNew.save();
        return res.status(201).json(commentNew);
    } catch (error) {
        res.status(500).json(error);
    }
};

//Find All Comments
exports.findAllComments = async (req, res) => {
    let comment;
    try {
        comment = await Comment.find()
    }
    catch (err) {
        return console.log(err)
    }

    return res.status(200).json({ comment })
}

// Find comment by video
exports.getComments = async (req, res) => {
    const { id } = req.params;
    try {
        const video = await Video.findById(id);
        if (!video) {
            return res.status(404).json({ message: "Video not found" });
        }

        const comments = await Comment.find({ VideoId: video._id });
        return res.status(200).json(comments);
    } catch (error) {
        res.status(500).json(error);
    }
};




// Post a Product by VideoId
exports.postProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { LinkProduct, Title, Price } = req.body;
        const newProduct = new Product({

            LinkProduct,
            Title,
            Price,
            VideoId: id,
        });

        const video = await Video.findById(id);
        if (!video) {
            return res.status(404).json({ message: "Video not found" });
        }

        await newProduct.save();
        return res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json(error);
    }
};

//Find All Products
exports.findAllProducts = async (req, res) => {
    let product;
    try {
        product = await Product.find()
    }
    catch (err) {
        return console.log(err)
    }

    return res.status(200).json({ product })
}

// Find Product by video
exports.getProducts = async (req, res) => {
    const { id } = req.params;
    try {
        const video = await Video.findById(id);
        if (!video) {
            return res.status(404).json({ message: "Video not found" });
        }

        const product = await Product.find({ VideoId: video._id });
        return res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
};
