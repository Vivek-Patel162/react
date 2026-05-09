
import {useState} from "react";
export default function LikeButton(){
    let [isLiked,setIsLiked]=useState(false);
   
     let toggleLike=()=>{
      setIsLiked(!isLiked);
     }
     let likeStyle={color:"red"};
    return(
       <div>
       <p onClick={toggleLike}>
        {isLiked? <i className="fa fa-heart" aria-hidden="true"  style={likeStyle}></i>:<i className="fa fa-heart-o" aria-hidden="true"></i>}
    
       </p>
       </div>
       
    );
}