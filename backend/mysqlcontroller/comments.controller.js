const Comment = require("../mysqlmodel/comments.model");

exports.create = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const comment = new Comment({
        
        commentId: req.body.commentId,
        commentBody: req.body.commentBody,
        teacherId: req.body.teacherId,
        parentId: req.body.parentId,
       
      });

      // Save Comment in the database
      Comment.create(comment, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Comment."
      });
    else res.send(data);
  });
}

// Retrieve all tComments from the databas.
exports.findAllComments =(req, res) => {
  const lastname = req.query.lastname;
  Comment.findAllComments(lastname, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Comments."
      });
    else res.send(data);
  });
};

//retrieve one comment using their id
exports.findOneComment = (req, res) => {
  Comment.findCommentById(req.params.commentId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found comment with id ${req.params.commentId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving comment with id " + req.params.commentId
        });
      }
    } else res.send(data);
  });
};


//update a comment
exports.updateCommentById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Comment.updateCommentById(
    req.params.commentId,
    new Comment(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found comment with id ${req.params.commentId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating comment with id " + req.params.commentId
          });
        }
      } else res.send(data);
    }
  );
};

exports.deleteComment = (req, res) => {
  Comment.deleteComment(req.params.commentId, 
    (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found comment with id ${req.params.commentId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Comment with id " + req.params.commentId
        });
      }
    } else res.send({ message: `Comment was deleted successfully!` });
  });
};
