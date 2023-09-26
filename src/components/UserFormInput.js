

const UserFormInput = (props) => {
    //console.log(props)
    const handleChangeEvent = (eventInput) => {
        let eventName = eventInput.target.name;
        let eventValue = eventInput.target.value
        props.getInput(eventName,eventValue)
    } 

    return <input 
    //required={props.required}
    value={props.value || ''}
    type={props.type} 
    name={props.name}
    onChange={ 
        (event) => {
            handleChangeEvent(event)
            }
        }></input>
}

export default UserFormInput;