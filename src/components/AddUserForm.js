
import UserFormInput from './UserFormInput'
import UserFormButton from './UserFormButton'
import { useState } from 'react'
import './AddUserForm.css'

const AddUserForm = (props) => {

    const [userInput, setUserInput] = useState({
        userName: '',
        age: ''
    })

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
        //send Submitted DATA
        // add check if the imput is empty
        props.sendData(userInput)
        setUserInput({
            userName:'',
            age:''
            }
        );

    }


    return <div className='form-container'>
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
        <UserFormButton type={'submit'} />
    </form>
    </div>
}

export default AddUserForm;