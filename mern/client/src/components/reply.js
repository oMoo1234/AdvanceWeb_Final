import React from 'react'
import '../main.css';


export default function reply() {


  return (
    <div>
        <div className='reply'>Reply</div>
        <div className='question-form'>
        <form >
          <textarea
          type="text"
          className="input"

          placeholder='answer question here'
          >
        </textarea>
        <br></br>
        <button type='submit' value='Submit' > <h2>Submit</h2></button>
        </form>
        </div>


    </div>
  )
}
