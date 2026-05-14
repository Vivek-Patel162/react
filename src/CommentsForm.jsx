import {useState} from "react";

export default function CommentsForm(){
    let [formData,setFormData]=useState({
        username:"",
        remarks:"",
        ratings:1,
    });

    let handleInputChange=(event)=>{
        setFormData((currData)=>{
            return{...currData , [event.target.name]:event.target.value};

        });

    }
    let handleSubmit=(event)=>{
        console.log(formData);
        event.preventDefault();
    }
    return(
        <div>
            Give a comment!
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username">
                </input>
                <br></br>
                <br></br>
                <label  htmlFor="remark">TextArea</label>
                <textarea value={formData.remarks} placeholder=" add few remarks"  onChange={handleInputChange} id="remark"   name="remarks">Remarks</textarea>
                <br></br>
                <br></br>
                <label   htmlFor="ratings">Ratings</label>
                <input placeholder="rating"  type="number" min={1}  max={100} value={formData.ratings} onChange={handleInputChange} id="ratings"  name="ratings"></input>
                <br></br>
                <button>Add Comment</button>
            </form>
        </div>
    )
}