
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

import "../main.css"

export default function GetQuestions() {
    const [resource, setResource] = useState();
    const[ item, setItem] = useState([]);
    const[update, setUpdate] = useState();
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('http://localhost:5000/question/')
        .then(response => response.json())
        .then(json => setItem(json))

    },[resource])

    let num = 1;
    let likes = 0;
    function handleVote(){
      likes++;
      console.log(likes);

    }
    function handleReply(){
        navigate("/reply");

    }

  return (
    <div>
      <div className='askedquestiontitle'>Asked Questions</div>
      <div className='askedQuestions'>{item.map( question => {
        return <p>
          {num++}. {question.question}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={handleVote}>{likes} Likes </button>
          &nbsp;&nbsp;
          <button onClick={handleReply}> reply</button>

        </p>
    })}
    </div>
    <div className='questions-asked'>

    </div>
    </div>
  )
}
