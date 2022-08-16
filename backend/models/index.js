
const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
//sequelizing
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/user.models")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.teacher = require("../models/teacher.model.js")(sequelize, Sequelize);
db.parent = require("../models/parent.model.js")(sequelize, Sequelize);
db.student = require("../models/student.model.js")(sequelize, Sequelize);
db.school = require("../models/school.model")(sequelize, Sequelize);
db.subject = require("../models/subject.model")(sequelize, Sequelize);
db.classlesson = require("../models/classlessons.model")(sequelize,Sequelize);
db.classroom = require("../models/classrooms.model")(sequelize, Sequelize);
db.post = require("../models/posts.model")(sequelize, Sequelize);
db.comment = require("../models/comments.model")(sequelize, Sequelize);
db.message = require("../models/messages.model")(sequelize, Sequelize);
db.class = require("../models/class.model")(sequelize, Sequelize);
db.term = require("../models/terms.model")(sequelize, Sequelize);
db.mark = require("../models/studentMarks.model")(sequelize, Sequelize);
db.attendance = require("../models/attendance.model")(sequelize, Sequelize);

//teachers and users table 1 to 1 relationship
db.user.hasOne(db.teacher, {
    foreignKey: "userId",
    targetKey: "userId"});

//students and users table 1 to 1 relationship
db.user.hasOne(db.student, {
    foreignKey: "userId",
    targetKey: "userId"});

//parents and users table 1 to 1 relationship
db.user.hasOne(db.parent, {
    foreignKey: "userId",
    targetKey: "userId"});

//many to many relationship between user and role table
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

//one to many relationship
db.parent.hasMany(db.student, {
  foreignKey: "parentId",
  targetKyKey: "parentId"
});

//one to many relationship
db.school.hasMany(db.student, {
  foreignKey: "schoolId",
  targetKyKey: "schoolId"
});

//one to many relationship school and teacher
db.school.hasMany(db.teacher, {
  foreignKey: "schoolId",
  targetKyKey: "schoolId"
});

//many to many relationships students and subjects
db.student.belongsToMany(db.subject, {
  through: "student_subjects",
  foreignKey: "studentId",
  otherKey: "subjectCode"
});
db.subject.belongsToMany(db.student, {
  through: "student_subjects",
  foreignKey: "subjectCode",
  otherKey: "studentId"
});

//many to many relationships teacher and students
db.teacher.belongsToMany(db.subject, {
  through: "teacher_subjects",
  foreignKey: "teacherId",
  otherKey: "subjectCode"
});
db.subject.belongsToMany(db.teacher, {
  through: "teacher_subjects",
  foreignKey: "subjectCode",
  otherKey: "teacherId"
});

// one to one relationship between lesson and room
db.classroom.hasOne(db.classlesson, {
  foreignKey: "roomId",
  targetKey: "roomId"
});

//one to many subject and lesson
db.subject.hasMany(db.classlesson, {
  foreignKey: ("subjectCode"),
  targetKey: "subjectCode"
});

//one to many teacher and post
db.teacher.hasMany(db.post, {
  foreignKey: "teacherId",
  targetKey: "teacherId"
});

//one to many teacher and comments
db.teacher.hasMany(db.comment,{
  foreignKey: "teacherId",
  targetKey: "teacherId"
});

//one to many parent and comment
db.parent.hasMany(db.comment, {
  foreignKey: "parentId",
  targetKey: "parentId"
});

//one to many teacher and message

db.message.hasMany(db.teacher, {
  foreignKey: "messageId",
  targetKey: "messageId"
});


// one to many parent and messages

db.message.hasMany(db.parent, {
  foreignKey: "messageId",
  targetKey: "messageId"
});

// one to many term and marks
db.term.hasMany(db.mark, {
  foreignKey: "termId",
  targetKey: "termId"
});

// one to many  student and marks

db.class.hasMany(db.mark, {
  foreignKey: "classId",
  targetKey: "classId"
})
// one to many student and marks

db.student.hasMany(db.mark, {
  foreignKey: "studentId",
  targetKey: "studentId"
});
// one to many class and student
db.class.hasMany(db.student,{
  foreignKey: "classId",
  targetKey: "classId"
});

//one to many student and attendance
db.student.hasMany(db.attendance, {
  foreignKey: "studentId",
  targetKey: "studentId"
});

//one to many  class and 
db.class.hasMany(db.attendance, {
  foreignKey: "classId",
  targetKey: "classId"
});

//one to many term and attendance
db.term.hasMany(db.attendance, {
  foreignKey: "termId",
  targetKey: "termId"
});

db.subject.hasMany(db.mark, {
  foreignKey: "subjectCode",
  targetKey: "subjectCode"
});

module.exports = db;