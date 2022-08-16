
module.exports = app =>{

    const userroles = require("../mysqlcontroller/user_rolesController")

    var router = require("express").Router();

    router.post("/adduserroles", userroles.add);

    app.use("/api/smis", router)
}

