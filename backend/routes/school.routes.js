
module.exports = app =>{
    
    const school = require("../mysqlcontroller/school.controller")

    var router = require("express").Router();

    //create new school
    router.post("/add", school.create);

    //get all schools
   //router.get("/get", school.findAll);

     //get one school
    // router.get("/te/:schoolId", school.findOne);

     //update school
     //router.put("/:schoolId", school.update);




     app.use("/api/school/", router);


}
