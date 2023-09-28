import UserListItem from './UserListItem'
import './UserList.css'
import Card from './UI/Card'

const UserList = (props) => {
    console.log(props.userListData)
    return (
        <Card>
            <div className='list-container'>
                <ul>
                {props.userListData.map((item,index) => <UserListItem 
                    key={index}
                    username={item.userName}
                    age={item.age}
                />)}
                </ul>
            </div>
        </Card>
    )
}

export default UserList;