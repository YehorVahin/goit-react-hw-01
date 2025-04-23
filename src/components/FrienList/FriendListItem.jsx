import css from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
    return(
        <div className={css.card}>
            <img src={avatar} alt="User avatar" className={css.avatar} width="48" />
            <p className={css.name}>{name}</p>
            <p className={css.isOnline ? css.online : css.offline}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}
export default FriendListItem 