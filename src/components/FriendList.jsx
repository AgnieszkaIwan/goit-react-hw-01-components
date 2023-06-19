import styles from '../components/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span
        className={`${styles.status} ${
          isOnline ? styles.online : styles.offline
        }`}
      />
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
      <span className={styles['status-text']}>
        {isOnline ? 'online' : 'offline'}
      </span>
    </li>
  );
};

export default FriendList;
