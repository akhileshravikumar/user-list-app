import React from "react";
import './UserList.css';

const UserList = (props)=>{
    return(
    <div className="users">
        
        <ul id="user-list">
        <label htmlFor="user-list">Users</label>
            {props.list.map((item)=>{
                return (<li key={Math.random()}>{item.name}: {item.age} years old</li>);
            })}
        </ul>
    </div>);
}

export default UserList;