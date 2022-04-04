import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../main.css';

const Record = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.position}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}><h3>Edit</h3></Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       <h3>Delete</h3>
     </button>
   </td>
 </tr>
);

export default function RecordList() {
 const [records, setRecords] = useState([]);

 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);

     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }

     const records = await response.json();
     setRecords(records);
   }

   getRecords();

   return;
 }, [records.length]);

 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });

   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }

 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }

 // This following section will display the table with the records of individuals.
 return (
   <div className="list">
     <h3 className="head">Record List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Password</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
     <Link to="/">Ask question</Link>
   </div>
 );
}