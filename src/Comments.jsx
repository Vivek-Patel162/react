 import {useState} from "react";
 import "./comment.css";
export default function Comments(){
 let [comments,setComment]=useState([{
    username:"@ask",
    remarks:"greate Job",
    rating:4
 }]);
  return (
    <div>
        <h3>All Comments</h3>
        <div className="comment">
          <p>{comments[0].username}</p>
          &nbsp;
          <span>{comments[0].remarks}</span>
          &nbsp;
          <span>{comments[0].rating}</span>
        </div>
    </div>
  )
}