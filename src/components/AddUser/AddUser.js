import React from "react";
import Button from "../../Utils/Button";
import './AddUser.css'



const AddUser = ({setUserList, setFlag})=>{

    const submitHandler = (event)=>{
        event.preventDefault();

        const age  = event.target.age.value;
        const user = event.target.username.value;

        if(age< 0 || age === "" || user===""){
            setFlag(true);            
        }
        else{
            setUserList((prevState)=>{return ([...prevState, {name: user, age:age}])})
        }
        
    }

    return(
    <form onSubmit={submitHandler} className="input">
        <label htmlFor='username'>User Name</label>
        <input type='text' id="username"></input>
        <label htmlFor='age'>Age</label>
        <input type='number' id="age"></input>

        <Button value='Add User' type='submit'></Button>
    </form>
    );
}

export default AddUser;