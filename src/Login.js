
import React, { useState}from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from './Components/services/auth.service';

const Login = () => {
    
        //initializing the password and username state
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
    
        //initializing error msg and data loading
        const [loading, setLoading] = useState(false);
        const [message, setMessage] = useState("");
        
        //function that handle username inpute changes
        const onChangeUsername = (e) =>{
            const username = e.target.value;
            setUsername(username);
        }
    
        //function that handles password input changes
        const onChangePassword = (e) =>{
            const password = e.target.value;
            setPassword(password)
        };
    
        const navigate = useNavigate()
    
        //function that handles login upon pressing login btn
        const handleLogin = (e) => {
            e.preventDefault();
            setMessage("");
            setLoading(true);
            
                //checking the authentications of the users
                AuthService.login(username, password).then(
                    ()=>{
                        
                        navigate("/profiler")
                        window.location.reload();
                        
                    },
                    (error)=>{
                        const resMessage = 
                        (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                        error.message ||
                        error.toString();
                        setLoading(false);
                        setMessage(resMessage)
                    }
                );
        };
    
    

  return (
    
    <section className='vh-100'  >
        <div className="container py-5 ">
            <div className="row d-flex justify-content-center aligh-items-center h-100">
                <div className="col col-xl-10">
                    <div className="">
                        <div className="row g-0">

                            <div className=" col-md-6 col-lg-5 d-none d-md-block ">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                    alt='"login form'
                                    className="img-fluid"
                                />
                            </div>

                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                <div className="card-body p-4 p-lg-5 text-black">
                        
                                    <form onSubmit={handleLogin} >

                                        <div className="d-flex align-items-center mb-3 pb-1">
                                            <i className="fas fa-cubes fa-2x me-3"></i>
                                            <span className="h3 fw-bold mb-0"><h2>GREMA  HIGH  SCHOOL</h2><br/><h5>Student Management Information System</h5></span>
                                        </div>

                                        <h5 className="fw-normal mb-3 pb-3">Sign In</h5>
                                        
                                        <div className="form-outline mb-4">
                                            <label 
                                                className="form-label" 
                                                htmlFor="username">Username
                                            </label>
                                             
                                            <input 
                                                type="text" 
                                                autoComplete="falsee"
                                                placeholder="Enter your Username"
                                                onChange={onChangeUsername}
                                                name="username"
                                                value={username}
                                                required
                                                id="username" 
                                                className="form-control form-control-lg" />    
                                        </div> 

                                        <div className="form-outline mb-4">
                                            <label 
                                                className="form-label" 
                                                htmlFor="password">Password
                                            </label>
                                            
                                            <input 
                                                type="password" 
                                                placeholder="Enter your Password"
                                                name='password'
                                                value={password}
                                                onChange={onChangePassword}
                                                id="password" 
                                                className="form-control form-control-lg" />
                                        </div>

                                        <div className="pt-1 mb-4">
                                            <button 
                                                className="btn btn-dark btn-lg btn-block"
                                                >
                                                {loading&&( <span className='spinner-border spinner-border-sm'></span>)}
                                                <span>Sign in</span>
                                            </button>
                                        
                                        {/* showing the error message if not connected to server, user input wrong username or password*/}                                 
                                        {message && (
                                            <div className="">
                                                <div className="alert alert-danger" role="alert">
                                                {message}
                                                </div>
                                            </div>
                                             )}
                                        </div> 

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
                

        
  )
}

export default Login
