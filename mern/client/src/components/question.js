import React, {useState, useEffect} from 'react'
import '../main.css';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


export default function Question() {
  const [form, setForm] = useState([]
   );

 const navigate = useNavigate();
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newQuestion = { ...form };
    await fetch("http://localhost:5000/question/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" ,
      },
      body: JSON.stringify(newQuestion),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
    setForm({ question: "", likes:""});
    navigate("/");
  }

  return (
    <div className='question-div'>
      <div className='question-title'><h1> Ask a Question!</h1>
      </div>
      <div className='question-form'>
        <form onSubmit={onSubmit}>
          <textarea
          type="text"
          className="input"
          value={form.question}
          onChange={(e) => updateForm({ question: e.target.value })}
          >
        </textarea>
        <br></br>
        <button type='submit' value='Submit' > <h2>Submit</h2></button>
        </form>
        </div>
        <div className='questions-asked'>
          <Link to="/asked_questions">Previously Asked Question(s)</Link>

        </div>
    </div>

  )
}
