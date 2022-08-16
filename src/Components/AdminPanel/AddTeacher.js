import React, { useState, useRef } from "react";
//import Form from "react-validation/build/form";
//import Input from "react-validation/build/input";
//import CheckButton from "react-validation/build/button";
//import { isEmail } from "validator";
import AuthService from "../services/auth.service";
// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };
// const validEmail = (value) => {
//   if (!isEmail(value)) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This is not a valid email.
//       </div>
//     );
//   }
// };
const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};
const AddTeacher = (props) => {
  const form = useRef();
  //const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // form2- teacher details registration
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");
  const [joinDate, setJoinDate] = useState("");

  // setting out error messages
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  // handling events
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeFirstname = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeMiddlename = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeLastname = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangeGender = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangeQualification = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangeJoinDate = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    //form.current.validateAll();
      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    
  };

  return (
    
      <div className="container">
        <div className="col-md-6">
        <h3 className="text-center" >Teacher Sign Up Form</h3><hr/>
        <form onSubmit={handleRegister}>
          {!successful && (
            <div>
              <div className="form-group" >
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  required
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}
          {message && (
            <div className="form-group">
              <div
                className={ successful ? "alert alert-success" : "alert alert-danger" }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
      <br></br> <br></br>
      <div className="col-md-6">
      <h3 className="text-center" >Additional Information</h3><hr/>
      <form autoComplete="off" >
          {!successful && (
            
              <div className="form-group" >
                <label htmlFor="firstname">Firstname</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  value={username}
                  onChange={onChangeFirstname}
                  required
                />
             
              <div className="form-group">
                <label htmlFor="middlename">Middle Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="middlename"
                  value={middlename}
                  onChange={onChangeMiddlename}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Lastname</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  value={lastname}
                  onChange={onChangeLastname}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <input
                  type="text"
                  className="form-control"
                  name="gender"
                  value={gender}
                  onChange={onChangeGender}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="qualification">Qualification</label>
                <input
                  type="qualification"
                  className="form-control"
                  name="qualification"
                  value={qualification}
                  onChange={onChangeQualification}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="joinDate">Join Date</label>
                <input
                  type="joinDate"
                  className="form-control"
                  name="joinDate"
                  value={joinDate}
                  onChange={onChangeJoinDate}
                  required
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block">Submit</button>
              </div>
            </div>
          )}
          {message && (
            <div className="form-group">
              <div
                className={ successful ? "alert alert-success" : "alert alert-danger" }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
         {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
        </form>
        </div>
    </div>
  );
};
export default AddTeacher;