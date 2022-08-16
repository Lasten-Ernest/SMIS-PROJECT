const Parent = require("../mysqlmodel/parent.model");

exports.create = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const parent = new Parent({
        parentId: req.body.parentId,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        gender: req.body.gender,
        address: req.body.address,
        userId: req.body.userId,
        messageId: req.body.messageId
      });

      // Save parent in the database
      Parent.create(parent, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Parent."
      });
    else res.send(data);
  });
}

// Retrieve all parent from the database (with condition).
exports.findAllParents =(req, res) => {
  const lastname = req.query.lastname;
  Parent.findAllParents(lastname, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Parents."
      });
    else res.send(data);
  });
};

//retrieve one parent using their id
exports.findOneParent = (req, res) => {
  Parent.findParentById(req.params.parentId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found parent with id ${req.params.parentId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving parent with id " + req.params.parentId
        });
      }
    } else res.send(data);
  });
};


//update a parent
exports.updateParentById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Parent.updateParentById(
    req.params.parentId,
    new Parent(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found parent with id ${req.params.parentId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating parent with id " + req.params.parentId
          });
        }
      } else res.send(data);
    }
  );
};

exports.deleteParent = (req, res) => {
  Parent.deleteParent(req.params.parentId, 
    (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found parent with id ${req.params.parentId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete parent with id " + req.params.parenetId
        });
      }
    } else res.send({ message: `parent was deleted successfully!` });
  });
};
