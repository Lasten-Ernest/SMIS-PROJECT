
module.exports = app =>{
    const parent = require("../mysqlcontroller/parent.controller")

    var router = require("express").Router();

    router.delete("/parent/:parentId", parent.deleteParent);

    // //create new school
    router.post("/addParent", parent.create);

    // //get all students
    router.get("/getAllParents", parent.findAllParents);

    // //get one school
    router.get("/parent/:parentId", parent.findOneParent);

    // //update student
    router.put("/parent/:parentId", parent.updateParentById);


    app.use("/api/smis", router);


}
