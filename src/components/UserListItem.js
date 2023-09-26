import "./UserList.css"

const UserListItem = (props) => {
    return (
        <li className="list-item" key={props.index}>{props.username} and {props.age}</li>
    )
} 

export default UserListItem;