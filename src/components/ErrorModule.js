import './ErrorModule.css'

const ErrorModule = (props) =>{

    const dismissAlertHandler = () =>{
        props.dismissAlert(false)
        console.log('click dismiss')
    }

    return (
    <div className='error-module'>
        <div className='error-mobule__msg'>
             <h1>The entered data IS missing username or age input</h1>
             <button onClick={() => {dismissAlertHandler()}}>Dismiss</button>
        </div>
    </div>
    )
}

export default ErrorModule;