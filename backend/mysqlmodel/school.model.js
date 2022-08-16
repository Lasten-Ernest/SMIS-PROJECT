const sql = require("../models/mysqldb.js")
//constructor
const School = function(school){
    this.schoolId = school.schoolId;
    this.schoolName = school.schoolName;
    this.schoolAdress = school.schoolAdress;
    this.schoolPhoneNo = school.schoolPhoneNo;
    this.schoolLocation = school.schoolLocation;
}

//insert school details query
School.create = (newSchool, result)=>{
    sql.query("INSERT INTO schools SET ?", 
    newSchool, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        };

        console.log("create school: ", {
            schoolId: res.insertSchoolId, 
            ...newSchool});
        result(null, { 
            schoolId: res.insertSchoolId, 
            ...newSchool });

    });
}

module.exports = School;