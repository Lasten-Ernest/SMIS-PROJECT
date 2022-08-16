const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

//const school = require("../controllers/school.controller")
const teacher = require("../mysqlcontroller/teacher.controller")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  // app.post("/api/smis/addteacher",
  // [authJwt.verifyToken, authJwt.isTeacher],
  // teacher.create);
//get public content
  app.get("/api/smis/all", controller.allAccess);

  //accesses by all users content
  app.get(
    "/api/smis/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  //get teacher content
  app.get(
    "/api/smis/teacher",
    [authJwt.verifyToken, authJwt.isTeacher],
    controller.teacherBoard
  );

  //get to admin content
  app.get(
    "/api/smis/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard,
  );

  //get student content
  app.get(
    "/api/smis/student",
    [authJwt.verifyToken, authJwt.isStudent],
    controller.studentBoard
    );
  

  //get parent content
  app.get(
    "/api/smis/parent",
    [authJwt.verifyToken, authJwt.isParent],
    controller.parentBoard
  );


  /* teachers routes*/

  //post teacher personal details
  // app.post("/api/smis/addteacher",
  // [authJwt.verifyToken, authJwt.isTeacher],
  // teacher.create);

  /* school detailes routes*/
  
    //create new school
  //   app.post(
  //     "/api/school/createSchool",
  //     [authJwt.verifyToken, authJwt.isAdmin],
  //     school.create);

  //   //get all schools
  //  app.get(
  //    "/api/school/getSchool", 
  //    [authJwt.verifyToken, authJwt.isAdmin],
  //    school.findAll);

  //   //get one school
  //   app.get(
  //     "/api/school/:schoolId", 
  //     [authJwt.verifyToken, authJwt.isAdmin],
  //     school.findOne);

  //   //update school
  //   app.put("/api/school/:schoolId",
  //     [authJwt.verifyToken, authJwt.isStudent],
  //     school.update);

};