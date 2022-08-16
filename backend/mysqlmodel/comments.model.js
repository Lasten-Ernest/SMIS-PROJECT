const sql = require("../models/mysqldb")

//constructor 
const Comment = function(comment) {
    this.commentId = comment.commentId;
    this.commentBody = comment.commentBody;
    this.teacherId = comment.teacherId;
    this.parentId = comment.parentId;
    

    
}
//insrt a comment into a system
Comment.create = (newComment, result)=> {
    
    sql.query("INSERT INTO comments SET ?", newComment, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created comments: ", { commentId: res.insertCommentId, ...newComment });
    result(null, { commentId: res.insertCommentId, ...newComment });
        
    })
}

//retrieving one comment
Comment.findCommentById = (commentId, result) => {
    sql.query(`SELECT * FROM comments WHERE commentId = ${commentId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found comment: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found comment with the id
      result({ kind: "not_found" }, null);
    });
  };

  //retrieving all comments
  Comment.findAllComments = (commentBody, result) => {
    let query = "SELECT commentId, commentBody, createdAt FROM comments";
    if (commentBody) {
      query += ` WHERE commentBody LIKE '%${commentBody}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("comments: ", res);
      result(null, res);
    });
  };

  //update comment by their id
  Comment.updateCommentById = (commentId, comment, result) => {
    
    sql.query(
      "UPDATE comments SET commentBody = ? WHERE commentId = ?",
      
      [ comment.commentBody, 
        commentId],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {

          // not found comment with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated comment: ", 
        { commentId: commentId, ...comment });
        result(null, { commentId: commentId, ...comment });
      }
    );
  }

  //delete al comment by id
  Comment.deleteComment = (commentId, result) => {
    
    sql.query("DELETE FROM comments WHERE commentId = ?", 
    
    commentId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found comment with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted comment with Id: ", commentId);
      result(null, res);
    });
  };

module.exports = Comment;