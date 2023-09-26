import UserListItem from './UserListItem'
import './UserList.css'

const UserList = (props) => {
    console.log(props.userListData)
    return (
        <div className='container'>
            <div className='list-container'>
                <ul>
                {props.userListData.map((item,index) => <UserListItem 
                    key={index}
                    username={item.userName}
                    age={item.age}
                />)}
                </ul>
            </div>
        </div>
    )
}

export default UserList;