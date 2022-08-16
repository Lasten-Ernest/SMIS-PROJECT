const express = require("express");
const morgan = require("morgan")
const bodyParser = require("body-parser")

require('dotenv').config();

var AWS = require('aws-sdk');


const db = require("./models");
db.sequelize.sync();


const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost:4001"
};

app.use(morgan('dev'))
app.use(cors(corsOptions));
 

//parse request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json())
//simple get route
app.get('/', (req, res)=>{
    res.json({message:'helloworld'});
});

//sms text notification
app.get('/api/school/sms', (req, res) => {

    console.log("Message = " + req.body.message);
    console.log("Number = " + req.body.number);
    console.log("Subject = " + req.body.subject);

    //passing parameters
    var params = {
        Message: req.body.message,
        PhoneNumber: '+' + req.body.number,
        MessageAttributes: {
            'AWS.SNS.SMS.SenderID': {
                'DataType': 'String',
                'StringValue': req.body.subject
            }
        }
    };

    //publishing text to the SNS api
    var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();

    //stringfying the data and also catching errors
    publishTextPromise.then(
        function (data) {
            res.end(JSON.stringify({ MessageID: data.MessageId }));
        }).catch(
            function (err) {
                res.end(JSON.stringify({ Error: err }));
            });

});


require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/school.routes")(app);
require("./routes/student.routes")(app);
require("./routes/teacher.routes")(app);
require("./routes/user_rolesroutes")(app);
require("./routes/parent.routes")(app);
require("./routes/post.routes")(app);
require("./routes/comments.routes")(app);

//require("./routes/smsroutes")(app);

//Set port, listen for requests
const PORT =  process.env.PORT || 4000
app.listen(PORT, ()=>console.log('helloo'));

