import React from 'react';
import AddUserForm from './components/AddUserForm';
import { useState } from 'react';
import UserList from './components/UserList';
import ErrorModule from './components/ErrorModule';

function App() {

  const [data, setData] = useState('')
  const [errorMsg, setErrorMsg] = useState(false)

  const dataToShow = (userData) => {
    console.log(userData);
    const {userName, age} = userData;
    if((userName.trim()).length === 0 || (age.trim()).length === 0 || ( +age < 1 ) ){
        // check the length and if age is not -number
       setErrorMsg(true)
    } else {
            //set the error msg
            setErrorMsg(false)
            //use getdata and set it to data
            setData((prevState) => {
              return [
                ...prevState,
                userData
              ]})
            }

    }

  const dismissAlertHandler = (state) => {
    //set error msg to false
    setErrorMsg(state);
  }

  if (data) {
    console.log(data)
  }
  
  return (
    
    <div>
    <AddUserForm sendData={dataToShow}></AddUserForm>
    {!errorMsg && !data ? <h1>No Data to Display</h1> : ''}
    {errorMsg && <ErrorModule dismissAlert={dismissAlertHandler} />}
    {!errorMsg && data ? <UserList userListData={data} /> : '' }
    </div>
  );
}

export default App;
