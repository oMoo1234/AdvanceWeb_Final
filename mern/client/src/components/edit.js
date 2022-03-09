import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import '../main.css';
export default function Edit() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   level: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();

 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);

     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }

     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }

     setForm(record);
   }

   fetchData();

   return;
 }, [params.id, navigate]);

 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }

 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     name: form.name,
     position: form.position,
     level: form.level,
   };

   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });

   navigate("/");
 }

 // This following section will display the form that takes input from the user to update the data.
 return (
   <div className="list">
     <h3>Update User</h3>
     <form onSubmit={onSubmit}>
       <div>
         <label >Name: </label>
         <input
          id="input"
           type="text"
           className="form-control"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div >
         <label>Password: </label>
         <input
          id="input"
          className="form-control"
          type="text"


           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>

       <div >
         <input
           id="addbutton"
           type="submit"
           value="Update Record"

         />
       </div>
     </form>
   </div>
 );
}