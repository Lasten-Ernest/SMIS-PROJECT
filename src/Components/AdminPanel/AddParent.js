import React, { useState, useRef } from "react";

import AuthService from "../services/auth.service";
import { Form, Card, Button } from "react-bootstrap";

// const vusername = (value) => {
//   if (value.length < 3 || value.length > 20) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The username must be between 3 and 20 characters.
//       </div>
//     );
//   }
// };
// const vpassword = (value) => {
//   if (value.length < 6 || value.length > 40) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The password must be between 6 and 40 characters.
//       </div>
//     );
//   }
// };
const AddParent = (props) => {
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
  const [phone, setPhone] = useState("");

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
  const onChangePhone = (e) => {
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
        <div  className="col-md-6">
        {/* <div className="col-xs-6 col-sm-6 col-md-6"> */}
        <br></br> <br></br>
        <h3 className="text-center" >Parent Sign Up Form</h3><hr/>
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

      <div className="col-md-6" >
      <form autoComplete="off">
          {!successful && (
            
              <div className="form-group" >
                <strong>Firstname</strong>
                <input type="text" className="form-control" name="firstname" 
                    value={username}  onChange={onChangeFirstname} required
                />
              <div className="form-group">
                <strong>Middle Name</strong>
                <input type="text" className="form-control" name="middlename"
                    value={middlename} onChange={onChangeMiddlename} required
                />
              </div>
              <div className="form-group">
                <strong htmlFor="lastname">Lastname</strong>
                <input type="text" className="form-control" name="lastname"
                    value={lastname} onChange={onChangeLastname} required
                />
              </div>
              <div className="form-group">
                <strong>Gender</strong>
                <input type="text" className="form-control" name="gender"
                    value={gender} onChange={onChangeGender} required
                />
              </div>
              <div className="form-group">
                <strong>Phone Number</strong>
                <input type="phone" className="form-control" name="phone"
                    value={phone} onChange={onChangePhone} required
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
        </form>
        </div>
        
        </div>
        
   
  );
};
export default AddParent;
