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


function App() {
 

  return (
    <>
    <Lottery n={3} winningSum={15}/>
   </>
  );
}

export default App
