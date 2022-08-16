const sql = require("../models/mysqldb.js");

const UserRoles = function(userRoles){
    this.userId = userRoles.userId;
    this.roleId = userRoles.roleId;
}

//insrt a teacherinto a system
UserRoles.add = (newUser_roles, result)=> {
    
    sql.query("INSERT INTO user_roles SET ?", newUser_roles, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    //console.log("created user_roles: ", { teacherId: res.insertTeacherId, ...newTeacher });
    result(null, { ...newUser_roles });
        
    })
}

module.exports = UserRoles;