import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Question from "./components/question";
import AskedQuestions from "./components/askedquestions";
import Reply from "./components/reply";





const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/list" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/" element={<Question />} />
       <Route path="/asked_questions" element={<AskedQuestions />} />
       <Route path="/reply" element={<Reply />} />


     </Routes>
   </div>
 );
};

export default App;