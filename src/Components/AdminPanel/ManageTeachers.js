import React from 'react'
import { Link } from 'react-router-dom';

const ManageTeachers = () => {
    var data;
  return (
    <div className='teachers'>
        <h1>Manage Teachers</h1>
        <table className="table">
            <thead>
                <tr>
                    <th style={{textAlign: "center"}}>No. </th>
                    <th style={{textAlign: "center"}}>Username</th>
                    <th style={{textAlign: "center"}}>Firstname</th>
                    <th style={{textAlign: "center"}}>Surname</th>
                    <th style={{textAlign: "center"}}>Gender</th>
                    <th style={{textAlign: "center"}}>BirthDate</th>
                    <th style={{textAlign: "center"}}>Start-Date</th>
                    <th style={{textAlign: "center"}}>Phone</th>
                    <th style={{textAlign: "center"}}>E-mail</th>
                    <th style={{textAlign: "center"}}>Password</th>
                    <th style={{textAlign: "center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td>BSS-TR-01</td>
                    <td>James</td>
                    <td>Kamwendo</td>
                    <td>M</td>
                    <td>01-02-95</td>
                    <td>20-09-19</td>
                    <td>0995908011</td>
                    <td>jameskamwendo@gmail.com</td>
                    <td>wawa@99</td>
                    <td>
                        <Link to={`/update/&{item.id}`}>
                            <button className="btn btn-view" >Edit</button>
                        </Link>
                        <button className="btn btn-delete" >Delete</button>
                        <Link to={`/view/&{item.id}`}>
                            <button className="btn btn-view" >View</button>
                        </Link> 
                        <Link to={`/view/&{item.id}`}>
                            <button className="btn btn-view" >Search</button>
                        </Link> 
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ManageTeachers