import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import BusinessLogical from './BusinessLogical'
import './Userz.css'
 
const Userz = () => {
    const [userz ,setUserz] = useState([])

    useEffect(() => {
        BusinessLogical.getAllUsers().then((response) =>{
            setUserz(response.data)
            console.log(response.data)
        }
        ).catch(error => {console.log(error.data)})
    }, [])
    
    return (
        <div className = 'cont'>
            <h1>List of the Users</h1>
            <Link to="/AddUser">
                <button>AddUser</button>
            </Link>
           <table className = 'tb'>
           <thead className = 'sm'>
                <th>User Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
            </thead>
            <tbody>
               {
                   userz.map( user =>
                    <tr key = {user.id}>
                        <td>{user.id} </td>
                        <td>{user.firstName} </td>
                        <td>{user.lastName} </td>
                        <td>{user.email} </td>
                        <td>{user.password} </td>
                    </tr>
                    )
               }
            </tbody>
           </table>
            
        </div>
    )
}

export default Userz
