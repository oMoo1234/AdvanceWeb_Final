import React from 'react'
import '../main.css';


export default function question() {
  return (
    <div className='question-div'>
      <div className='question-title'><h1> Ask a Question!</h1>
      </div>
      <div className='question-form'>
        <form>
          <textarea
          className='input'
          type="textarea"
          placeholder='type question here'
          >
        </textarea>
        <br></br>
        <button type='submit' value='Submit' > <h2>Submit</h2></button>
        </form>
        </div>
        <div className='questions-asked'>
          <h1>Previously Asked Question(s)</h1>
        </div>
    </div>

  )
}
