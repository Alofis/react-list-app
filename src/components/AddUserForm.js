
import UserFormInput from './UserFormInput'
import Button from './UI/Button'
import { useState } from 'react'
import './AddUserForm.css'
import Card from './UI/Card'
import ErrorModule from './ErrorModule'

const AddUserForm = (props) => {

    const [userInput, setUserInput] = useState({
        userName: '',
        age: ''
    })
    const [errMsg, setErrMsg] = useState();

    const getData = (name, input) => {
        setUserInput((prevState) => {
            return {
            ...prevState,
            [name]: input
            }
        })
    }

    const handleSubmittion = (event) =>{
        event.preventDefault();
        //validate the input
        if (userInput.userName.trim().length === 0 || userInput.age.trim().length === 0){
            console.log('no username or age')
            setErrMsg({
                title: 'No valid Input',
                details: 'Username or Age are invalid. Please double-check'
            });
            return 
        }
        if (userInput.age < 0) {
            console.log('negative age')
            setErrMsg({
                title: 'Age value error',
                details: 'Age is a negative value. Please double-check'
            });
            return
        }
        setErrMsg(null);
        //send data to app>list
        props.sendData(userInput)
        setUserInput({
            userName:'',
            age:''
            }
        );
    }

    const dismissAlertHandler = () => {
        //get the state FALSE from the button click
        setErrMsg(null);
    }
    return  <Card>
                {errMsg && <ErrorModule title={errMsg.title} details={errMsg.details} dismissAlert={dismissAlertHandler} />}
                <form className='form-controls' onSubmit={handleSubmittion}>
                    <label>Username</label>
                    <UserFormInput
                        //required={true}
                        value={userInput.userName}
                        type={'text'} 
                        name={'userName'} 
                        getInput={getData}  />
                    <label>Age</label>
                    <UserFormInput 
                        //required={true}
                        value={userInput.age}
                        type={'number'} 
                        name={'age'} 
                        getInput={getData}  />
                    <Button type={'submit'} title={'Add to the list'}/>
                </form>
            </Card>
}

export default AddUserForm;