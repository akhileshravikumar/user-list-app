import React,{useState} from 'react';
import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';
import Error from './components/Error/Error';


function App() {
  const [userList,setUserList]= useState([]);
  const [flag, setFlag]=useState(false);


  return (<>
    <AddUser setUserList={setUserList} setFlag={setFlag}/>
    {userList.length>0 && <UserList list={userList}/>}
    {flag && <Error setFlag={setFlag}/>}
       </>
  );
}

export default App;
