const User_roles= require("../mysqlmodel/user_roles.js")

//add user-roles relationship
exports.add = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const user_roles= new User_roles({
        userId: req.body.userId,
        roleId: req.body.roleId,
        
      });

      // Save Tutorial in the database
  User_roles.add(user_roles, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the users role."
      });
    else res.send(data);
  });
}