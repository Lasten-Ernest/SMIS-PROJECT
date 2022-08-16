const sql = require("../models/mysqldb")

//constructor 
const Post= function(post) {
    this.postId = post.postId;
    this.postTitle = post.postTitle;
    this.postBody = post.postBody;
    this.teacherId = post.teacherId;
    

    
}
//insrt a posts into a system
Post.create = (newPost, result)=> {
    
    sql.query("INSERT INTO posts SET ?", newPost, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created post: ", { postId: res.insertPostId, ...newPost });
    result(null, { postId: res.insertPostId, ...newPost });
        
    })
}

//retrieving one post
Post.findPostById = (postId, result) => {
    sql.query(`SELECT * FROM posts WHERE postId = ${postId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found post: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found post with the id
      result({ kind: "not_found" }, null);
    });
  };

  //retrieving all posts
  Post.findAllPosts = (postTitle, result) => {
    let query = "SELECT postTitle, postBody FROM posts";
    if (postTitle) {
      query += ` WHERE postTitle LIKE '%${postTitle}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("posts: ", res);
      result(null, res);
    });
  };

  //update post by their id
  Post.updatePostById = (postId, post, result) => {
    
    sql.query(
      "UPDATE posts SET postTitle = ?, postBody = ? WHERE postId = ?",
      
      [ post.postTitle, 
        post.postBody, 
         
        postId],

      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {

          // not found Post with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated post: ", 
        { postId: postId, ...post });
        result(null, { postId: postId, ...post });
      }
    );
  }

  //delete al post by id
  Post.deletePost = (postId, result) => {
    
    sql.query("DELETE FROM posts WHERE postId = ?", 
    
    postId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found post with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted post with postId: ", postId);
      result(null, res);
    });
  };

module.exports = Post;