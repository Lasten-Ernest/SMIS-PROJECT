const Student = require("../mysqlmodel/student.model");

exports.create = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const student = new Student({
        studentId: req.body.studentId,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        gender: req.body.gender,
        address: req.body.address,
        userId: req.body.userId,
        parentId: req.body.parentId,
        schoolId: req.body.schoolId,
        classId: req.body.classId
      });

      // Save Student in the database
  Student.create(student, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Student."
      });
    else res.send(data);
  });
}

// Retrieve all Students from the database (with condition).
exports.findAllStudents =(req, res) => {
  const lastname = req.query.lastname;
  Student.findAllStudents(lastname, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Students."
      });
    else res.send(data);
  });
};

//retrieve one Student using their id
exports.findOneStudent = (req, res) => {
  Student.findStudentById(req.params.studentId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found student with id ${req.params.studentId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Student with id " + req.params.studentId
        });
      }
    } else res.send(data);
  });
};


//update a Student
exports.updateStudentById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Student.updateStudentById(
    req.params.studentId,
    new Student(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found student with id ${req.params.studentId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating student with id " + req.params.studentId
          });
        }
      } else res.send(data);
    }
  );
};

exports.deleteStudent = (req, res) => {
  Student.deleteStudent(req.params.studentId, 
    (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found student with id ${req.params.studentId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete student with id " + req.params.studentId
        });
      }
    } else res.send({ message: `student was deleted successfully!` });
  });
};
