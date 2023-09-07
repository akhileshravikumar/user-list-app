import React, {useRef}from "react";
import Button from "../../Utils/Button";
import './AddUser.css'




const AddUser = ({setUserList, setFlag})=>{

    const nameRef = useRef();
    const ageRef = useRef();

    const submitHandler = (event)=>{
        event.preventDefault();

        const age  = ageRef.current.value;
        const user = nameRef.current.value;

        if(age< 0 || age === "" || user===""){
            setFlag(true);            
        }
        else{
            setUserList((prevState)=>{return ([...prevState, {name: user, age:age}])})
            nameRef.current.value = '';
            ageRef.current.value = '';
        }
        
    }

    return(
    <form onSubmit={submitHandler} className="input">
        <label htmlFor='username'>User Name</label>
        <input type='text' id="username" ref={nameRef}></input>
        <label htmlFor='age'>Age</label>
        <input type='number' id="age" ref={ageRef}></input>

        <Button value='Add User' type='submit'></Button>
    </form>
    );
}

export default AddUser;