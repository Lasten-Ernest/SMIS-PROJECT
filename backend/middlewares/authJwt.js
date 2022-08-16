const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

//verify login token
verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  //token provided but visit unauthorized role
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

//admin role
isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};

//teacher role
isTeacher = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "teacher") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Require Teacher Role!"
      });
    });
  });
};

//student role
isStudent = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "student") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Require Student Role!"
      });
    });
  });
};

//parent role 
isParent = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "parent") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Require Parent Role!"
      });
    });
  });
};


//accessed by all two users of the system
isTeacherOrAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "teacher") {
          next();
          return;
        }
        if (roles[i].name === "admin") {
          next();
          return;
        }
        if (roles[i].name === "student") {
          next();
          return;
        }
        if (roles[i].name === "parent") {
          next();
          return;
        }
      }
      
      res.status(403).send({
        message: "Require Teacher or student or parent or Admin Role!"
      });
    });
  });
};
const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isTeacher: isTeacher,
  isStudent: isStudent,
  isParent: isParent,
  isTeacherOrAdmin: isTeacherOrAdmin

};
module.exports = authJwt;