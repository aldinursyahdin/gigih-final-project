module.exports = app => {
    const video = require("../controllers/video.controller")
    const r = require("express").Router();

    r.get("/", video.findAllVideo);
    r.post("/", video.create);
    r.get("/comment", video.findAllComments)
    r.get("/product", video.findAllProducts)




    r.put("/:id", video.update);
    r.delete("/:id", video.delete);
    r.get("/:id", video.show);
    r.post("/comment/:id", video.postComment)
    r.get("/comment/:id", video.getComments)
    r.post("/product/:id", video.postProduct)
    r.get("/product/:id", video.getProducts)




    app.use("/video", r);

}