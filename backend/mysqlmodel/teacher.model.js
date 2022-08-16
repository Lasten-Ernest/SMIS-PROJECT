const sql = require("../models/mysqldb")

//constructor 
const Teacher = function(teacher) {
    this.teacherId = teacher.teacherId;
    this.firstname = teacher.firstname;
    this.middlename = teacher.middlename;
    this.lastname = teacher.lastname;
    this.gender = teacher.gender;
    this.qualification = teacher.qualification;
    this.joinDate = teacher.joinDate;

    
}
//insrt a teacherinto a system
Teacher.create = (newTeacher, result)=> {
    
    sql.query("INSERT INTO teachers SET ?", newTeacher, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created teacher: ", { teacherId: res.insertTeacherId, ...newTeacher });
    result(null, { teacherId: res.insertTeacherId, ...newTeacher });
        
    })
}

//retrieving one teacher
Teacher.findTeacherById = (teacherId, result) => {
    sql.query(`SELECT * FROM teachers WHERE teacherId = ${teacherId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found teacher: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found teacher with the id
      result({ kind: "not_found" }, null);
    });
  };

  //retrieving all teachers
  Teacher.findAllTeachers = (lastname, result) => {
    let query = "SELECT firstname,middlename,lastname,gender,qualification,joinDate FROM teachers";
    if (lastname) {
      query += ` WHERE lastname LIKE '%${lastname}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("teachers: ", res);
      result(null, res);
    });
  };

  //update teacher by their id
  Teacher.updateTeacherById = (teacherId, teacher, result) => {
    
    sql.query(
      "UPDATE teachers SET firstname = ?, middlename = ?, lastname = ?, gender = ?, qualification = ?, joinDate = ? WHERE teacherId = ?",
      
      [ teacher.firstname, 
        teacher.middlename, 
        teacher.lastname, 
        teacher.gender, 
        teacher.qualification, 
        teacher.joinDate, 
        teacherId],

      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {

          // not found Teacher with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated teacher: ", 
        { teacherId: teacherId, ...teacher });
        result(null, { teacherId: teacherId, ...teacher });
      }
    );
  }

  //delete al teacher by id
  Teacher.deleteTeacher = (teacherId, result) => {
    
    sql.query("DELETE FROM teachers WHERE teacherId = ?", 
    
    teacherId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found teacher with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted teacher with teacherId: ", teacherId);
      result(null, res);
    });
  };

module.exports = Teacher;