import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./Home.css";

const Display = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);
        
    };
    // refreshing the window
    useEffect(() => {
        loadData();
    }, []);

    // deleting user
    const deleteUser = (id) => {
        if (window.confirm("Are you sure you want to delete this User ?")
        ) {
          axios.delete(`http://localhost:5000/api/remove/${id}`);
          toast.success("User Deleted Successfully");
          // refreshing the window
          setTimeout(() => loadData(), 500);
        }
    };

  return (
    <div style={{marginTop: "40px"}}>
        {/* button for adding teachers */}
        <Link to={"/"}>
               <button type="button" className="btn btn-home">Back To Home</button>
            </Link>
        <Link to={"/addUsers"}>
            <button className="btn btn-users" >Register Teachers</button>
        </Link>

       
        <h1>LIST OF TEACHERS</h1>
        <table className="table">
            <thead>
                <tr>
                    <th style={{textAlign: "center"}}>No. </th>
                    <th style={{textAlign: "center"}}>Username</th>
                    <th style={{textAlign: "center"}}>Firstname</th>
                    <th style={{textAlign: "center"}}>Surname</th>
                    <th style={{textAlign: "center"}}>BirthDate</th>
                    <th style={{textAlign: "center"}}>Gender</th>
                    <th style={{textAlign: "center"}}>Password</th>
                    <th style={{textAlign: "center"}}>Action</th>
                </tr>
            </thead>

            <tbody>
                {data.map((item, index) => {
                    return (
                        <tr key={item.id} >
                                <th scope="row">{index+1}</th>
                                <td>{item.username}</td>
                                <td>{item.firstname}</td>
                                <td>{item.surname}</td>
                                <td>{item.dob}</td>
                                <td>{item.gender}</td>
                                <td>{item.password}</td>
                                <td>
                                    <Link to={`/update/&{item.id}`}>
                                       <button className="btn btn-edit" >Edit</button>
                                    </Link>

                                    <button className="btn btn-delete" onClick={() => deleteUser(item.id)}>Delete</button>

                                    <Link to={`/view/&{item.id}`}>
                                       <button className="btn btn-view" >View</button>
                                    </Link>
                                </td>

                        </tr>
                    )
                })}
            </tbody>
        </table>
        
    </div>
  )
}

export default Display;