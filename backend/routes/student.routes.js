
module.exports = app =>{
    const student = require("../mysqlcontroller/student.controller")

    var router = require("express").Router();

    router.delete("/student/:studentId", student.deleteStudent);

    // //create new school
    router.post("/addStudent", student.create);

    // //get all students
    router.get("/getAllStudents", student.findAllStudents);

    // //get one school
    router.get("/student/:studentId", student.findOneStudent);

    // //update student
    router.put("/student/:studentId", student.updateStudentById);


    app.use("/api/smis", router);


}
