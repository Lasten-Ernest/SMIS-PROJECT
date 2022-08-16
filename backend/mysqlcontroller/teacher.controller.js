const Teacher = require("../mysqlmodel/teacher.model");

exports.create = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const teacher = new Teacher({
        teacherId: req.body.teacherId,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        gender: req.body.gender,
        qualification: req.body.qualification,
        joinDate: req.body.joinDate
      });

      // Save teacher in the database
  Teacher.create(teacher, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Teacher."
      });
    else res.send(data);
  });
}

// Retrieve all teachers from the database (with condition).
exports.findAllTeachers =(req, res) => {
  const lastname = req.query.lastname;
  Teacher.findAllTeachers(lastname, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teachers."
      });
    else res.send(data);
  });
};

//retrieve one teacher using their id
exports.findOneTeacher = (req, res) => {
  Teacher.findTeacherById(req.params.teacherId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found teacher with id ${req.params.teacherId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving teacher with id " + req.params.teacherId
        });
      }
    } else res.send(data);
  });
};


//update a teacher
exports.updateTeacherById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Teacher.updateTeacherById(
    req.params.teacherId,
    new Teacher(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found teacher with id ${req.params.teacherId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating teacher with id " + req.params.teacherId
          });
        }
      } else res.send(data);
    }
  );
};

exports.deleteTeacher = (req, res) => {
  Teacher.deleteTeacher(req.params.teacherId, 
    (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found teacher with id ${req.params.teacherId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete teacher with id " + req.params.teacherId
        });
      }
    } else res.send({ message: `Teacher was deleted successfully!` });
  });
};
