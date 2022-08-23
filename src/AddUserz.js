import React from 'react'
import {useState} from 'react'
import './AddUser.css'
import BusinessLogical from './BusinessLogical'
import { useNavigate } from 'react-router-dom'


const AddUserz = () => {
   const [firstName, setfirstName] = useState('')
   const [lastName, setlastName] = useState('')
   const [email, setemail] = useState('')
   const [password, setpassword] = useState('')
   const nave = useNavigate();



   const saveUser = (e) =>{
       e.preventDefault()
       const user = {firstName,lastName,email,password}
       BusinessLogical.createAllUsers(user).then((respone)=>
       {
        console.log(respone.data)
        nave("/user")
        
       }).catch(error =>{
        console.log(error)
       })
   }
    return (
        <div className = 'fom'>
           <div>
           <h1>Add User</h1>
           </div>
           <div>
               <form  className = 'foms'>
                   <div >
                       <label>First Name</label>
                       <input
                       type = 'text'
                       placeholder = 'Enter FirstName'
                       name = 'firstName'
                       value = {firstName}
                       onChange = {(e) => setfirstName(e.target.value)}
                       />
                       
                   </div>
                   <div>
                       <label>Last Name</label>
                       <input
                       type = 'text'
                       placeholder = 'Enter last Name'
                       name = 'lastName'
                       value = {lastName}
                       onChange = {(e) => setlastName(e.target.value)}
                       />
                   </div>
                   <div>
                       <label>Email</label>
                       <input
                       type = 'text'
                       placeholder = "Enter email"
                       name = 'email'
                       value = {email}
                       onChange = {(e) => setemail(e.target.value)}
                       />
                   </div>
                   <div>
                       <label>Password</label>
                       <input
                       type = 'text'
                       placeholder= 'Enter Password'
                       name = 'password'
                       value = {password}
                       onChange ={(e) => setpassword(e.target.value)}
                       />
                   </div>

               </form>
               <button onClick = {(e) => saveUser(e)} >Save</button>
           </div>

        </div>
    )
}

export default AddUserz
