import "./Button.css"

const Button = (props) => {  

    return <button className="ui__button" type={props.type} onClick={props.onClick}>{props.title}</button>
}

export default Button;