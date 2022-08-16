const School = require("../mysqlmodel/school.model");

exports.create = (req, res)=>{
    //validate request
    if (!req.body){
        res.status(400).send({
            message: "content cannot be empty"
        });
    }

    const school = new School({
        schoolId: req.body.schoolId,
        schoolName: req.body.schoolName,
        schoolAdress: req.body.schoolAdress,
        schoolPhoneNo: req.body.schoolPhoneNo,
        schoolLocation: req.body.schoolLocation
    });

    //handle error/send data
    School.create(school, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "some error occured"
            })
        }
        else res.send(data);
    });
}