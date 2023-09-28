import React from 'react';
import AddUserForm from './components/AddUserForm';
import { useState } from 'react';
import UserList from './components/UserList';
import Card from './components/UI/Card';

function App() {

  const [data, setData] = useState('');

  const dataToShow = (userData) => {
    console.log(userData);
    //use getdata and set it to data
      setData((prevState) => {
        return [
          ...prevState,
          userData
        ]})
  }
  if (data) {
    console.log(data)
  }
  
  return (
    
    <div>
    <AddUserForm sendData={dataToShow}></AddUserForm>
    {data ? <UserList userListData={data} /> : <Card><h2>No Data</h2></Card> }
    </div>
  );
}

export default App;
