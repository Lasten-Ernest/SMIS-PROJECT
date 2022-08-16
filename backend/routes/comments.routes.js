
module.exports = app =>{
    const comment = require("../mysqlcontroller/comments.controller")

    var router = require("express").Router();

    router.delete("/comment/:commentId", comment.deleteComment);

    // //create new school
    router.post("/addComment", comment.create);

    // //get all students
    router.get("/getAllComments", comment.findAllComments);

    // //get one school
    router.get("/comment/:commentId", comment.findOneComment);

    // //update student
    router.put("/comment/:commentId", comment.updateCommentById);


    app.use("/api/smis", router);


}
