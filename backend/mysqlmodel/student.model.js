const sql = require("../models/mysqldb")

//constructor 
const Student = function(student) {
    this.studentId = student.studentId;
    this.firstname = student.firstname;
    this.middlename = student.middlename;
    this.lastname = student.lastname;
    this.gender = student.gender;
    this.address = student.address;
    // this.createdAt = student.createdAt;
    // this.updatedAt = student.updatedAt;
    this.userId = student.userId;
    this.parentId = student.parentId;
    this.schoolId = student.schoolId;
    this.classId = student.classId;

    
}
//insert a student into a system
Student.create = (newStudent, result)=> {
    
    sql.query("INSERT INTO students SET ?", newStudent, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created student: ", { studentId: res.insertStudentId, ...newStudent });
    result(null, { studentId: res.insertStudentId, ...newStudent });
        
    })
}

//retrieving one student
Student.findStudentById = (studentId, result) => {
    sql.query(`SELECT * FROM students WHERE studentId = ${studentId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found student: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found student with the id
      result({ kind: "not_found" }, null);
    });
  };

  //retrieving all students
  Student.findAllStudents = (lastname, result) => {
    let query = "SELECT * FROM students";
    if (lastname) {
      query += ` WHERE lastname LIKE '%${lastname}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("students: ", res);
      result(null, res);
    });
  };

  //update student by their id
  Student.updateStudentById = (studentId, student, result) => {
    
    sql.query(
      "UPDATE students SET firstname = ?, middlename = ?, lastname = ?, gender = ?, address = ?, classId = ? WHERE studentId = ?",
      
      [ student.firstname, 
        student.middlename, 
        student.lastname, 
        student.gender, 
        student.address, 
        student.classId, 
        studentId],

      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {

          // not found student with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated student: ", 
        { studentId: studentId, ...student });
        result(null, { studentId: studentId, ...student });
      }
    );
  }

  //delete al student by id
  Student.deleteStudent = (studentId, result) => {
    
    sql.query("DELETE FROM students WHERE studentId = ?", 
    
    studentId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found student with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted student with studentId: ", studentId);
      result(null, res);
    });
  };

module.exports = Student;