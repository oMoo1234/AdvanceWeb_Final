import React, {useEffect} from "react";
import './App.css';
import { getPosts } from "../../server/controller/posts";

import {useDispatch} from 'react-redux'
function App() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts);
    },[dispatch]);
  return (
    <div class = "main_div">
         <h1>Create Account</h1>
        <div class=" signup_form">

            <form>
                <lable> username:</lable>
                <input placeholder="Enter Username"></input>
                <br></br>
                <label> password: </label>
                <input placeholder="Enter Password"></input>
                <br></br>
                <button Type="Submit"> Submit</button>
            </form>
        </div>
    </div>
  )
}

export default App;