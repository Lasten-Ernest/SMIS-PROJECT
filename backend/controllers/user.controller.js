

//can be accessed by user and none users
module.exports = {
  allAccess:  (req, res) => {
    res.status(200).send("Public Content.");
  },

  //all user can access
  userBoard: (req, res) => {
    res.status(200).send("User Content.");
    
  },

  //admin board
  adminBoard: (req, res) => {
    res.status(200).send("Admin Content.");
  },

  //teachers board
  teacherBoard: (req, res) => {
    res.status(200).send("teacher Content.");

  },

  studentBoard: (req, res) => {
    res.status(200).send("student Content.");
  },

  parentBoard: (req, res) => {
    res.status(200).send("parent Content.");
  }
}