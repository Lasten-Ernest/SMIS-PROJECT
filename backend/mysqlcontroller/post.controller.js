const { post } = require("../models");
const Post = require("../mysqlmodel/posts.model");

exports.create = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const post = new Post({
        postId: req.body.postId,
        postTitle: req.body.postTitle,
        postBody: req.body.postBody,
        teacherId: req.body.teacherId,
    });

      // Save post in the database
  Post.create(post, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the post."
      });
    else res.send(data);
  });
}

// Retrieve all posts from the database (with condition).
exports.findAllPosts =(req, res) => {
  const postTitle = req.query.postTitle;
  Post.findAllPosts(postTitle, (err, data) => {
    if (err) res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving posts."
      });
    else res.send(data);
  });
};

//retrieve one post using their id
exports.findOnePost = (req, res) => {
  Post.findPostById(req.params.postId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found post with id ${req.params.postId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving post with id " + req.params.postId
        });
      }
    } else res.send(data);
  });
};


//update a post
exports.updatePostById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Post.updatePostById(
    req.params.postId,
    new Post(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found post with id ${req.params.postId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating post with id " + req.params.postId
          });
        }
      } else res.send(data);
    }
  );
};

exports.deletePost = (req, res) => {
  Post.deletePost(req.params.postId, 
    (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found post with id ${req.params.postId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete post with id " + req.params.postId
        });
      }
    } else res.send({ message: `Post was deleted successfully!` });
  });
};
