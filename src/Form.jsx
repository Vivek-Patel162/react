import { useState } from "react";

export default function Form() {
    let [fullName, setName] = useState("Vivek");
    let [username,setUsername]=useState("Vivek2");
    
    let [formData,setFormData]=useState({
        fullName:"",
        userName:"",
    });

    // let handleNameChange = (event) => {
    //     // console.log(event.target.value);
    //     setName(event.target.value);
    // };

    // let handleUsername =(event) =>{
    //     setUsername(event.target.value);
    // };


       let handleInputChange=(event) =>{
        let fieldName=event.target.name;
       
        let newValue=event.target.value;
        console.log(newValue);
       }
    return (

        <form>
            <label htmlFor="fullName">Full Name</label> 
            <input placeholder="enter your name" 
            type="text" 
            value={formData.fullname} 
            onChange={handleInputChange}
            id="fullName"
            name="fullName"
            >
            </input>
            <button>Submit</button>

            <br></br>
            <br></br>

            <label htmlFor="username">User Name</label> 
            <input placeholder="enter your name" 
            type="text" 
            value={formData.username} 
            onChange={handleInputChange}
            id="username"
            name="userName"
            ></input>
            <button>Submit</button>
        </form>

    );
}