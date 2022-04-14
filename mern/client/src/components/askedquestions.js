
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "../main.css"

export default function GetQuestions() {
    const [resource, setResource] = useState();
    const[ item, setItem] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/question/')
        .then(response => response.json())
        .then(json => setItem(json))

    },[resource])

    let num = 1;

  return (
    <div>
      <div className='askedquestiontitle'>Asked Questions</div>
      <div className='askedQuestions'>{item.map( question => {
        return <p>
          {num++}. {question.question}
          <button>Vote</button>
        </p>
    })}
    </div>
    <div className='questions-asked'>

    </div>
    </div>
  )
}
