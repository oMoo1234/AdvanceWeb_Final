import React, { useState } from "react";
import { useNavigate } from "react-router";
import '../main.css';
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   password: "",

 });
 const navigate = useNavigate();

 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }

 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();


   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };

   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json" ,
     },
    //
     body: JSON.stringify(newPerson),

   })

   .catch(error => {
     window.alert(error);
     return;
   });

   setForm({ name: "", password: ""});
   navigate("/list");
 }

 // This following section will display the form that takes the input from the user.
 return (
   <div className="list">
     <h3>Create New User</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Username</label>
         <input
           type="text"
           className="form-control"
           id="input"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div >
         <label >Password</label>
         <input id="input" type="text" className="form-control"

           value={form.password}
           onChange={(e) => updateForm({ password: e.target.value })}
         >
           </input>
       </div>

       <div >
         <input id ="addbutton" type="submit" value="Create user" >

           </input>
       </div>
     </form>
   </div>
 );
}