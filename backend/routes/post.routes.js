
module.exports = app =>{
    const post = require("../mysqlcontroller/post.controller")

    var router = require("express").Router();

    router.delete("/post/:postId", post.deletePost);

    // //create new school
    router.post("/addPost", post.create);

    // //get all students
    router.get("/getAllPosts", post.findAllPosts);

    // //get one school
    router.get("/post/:postId", post.findOnePost);

    // //update student
    router.put("/post/:postId", post.updatePostById);
    

    app.use("/api/smis", router);


}
