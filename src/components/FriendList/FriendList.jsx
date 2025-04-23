import FriendlistItem from './FriendListItem'
import css from './FriendList.module.css';

const FriendList = ({friends}) => {
    return(
        <ul className={css.friendList}>
            {friends.map(({id, avatar, name, isOnline}) => (
                <li className={css.item} key={id}>
                    <FriendlistItem avatar={avatar} name={name} isOnline={isOnline}/>
                </li>
            ))}
        </ul>
    )
}
export default FriendList