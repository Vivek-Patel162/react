import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from "./Counter.jsx";
import LikeButton from "./LikeButton.jsx";
import LudoBox from "./LudoBoard.jsx";
import Todo from "./ToDo.jsx";
import Lottery from "./Lottery.jsx";
import Ticket from "./Ticket.jsx";
import {sum} from "./helper.js";
import Form from "./Form.jsx";
import CommentsForm from "./CommentsForm.jsx";
import Comments from "./Comments.jsx";

function App() {
 
  let winCondition=(ticket)=>{
    return ticket.every((num)=>num===ticket[0]);

  };

  return (
    <>
    <Comments/>
    <CommentsForm.jsx/>
   </>
  );
}

export default App
