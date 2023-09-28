import './ErrorModule.css'
import Button from './UI/Button'
import ReactDOM from 'react-dom'
import React from 'react'

const Backdrop = (props) => {
    return <div className={'backdrop'} onClick={props.dismissAlert} />
}

const ModalOverlay = (props) => {
    return <div className='error_mobule__msg'>
        <header className='error_header'>
            <h1>{props.title}</h1>
        </header>
        <div className='error_details'>
            <p>{props.details}</p>
        </div>
        <footer className='error_footer'>
            <Button type={'button'} title={'Dismiss'} onClick={props.dismissAlert}/>
        </footer>
    </div>
}

const ErrorModule = (props) =>{

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop dismissAlert={props.dismissAlert} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} details={props.details} dismissAlert={props.dismissAlert} />, document.getElementById('overlay-root'))}
        </React.Fragment>
        )
}

export default ErrorModule;