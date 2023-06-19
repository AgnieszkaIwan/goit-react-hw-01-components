import userData from '../user.json';
import styles from '../components/Profile.module.css';

export const ProfileComponent = () => {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <div className={styles.profileCard}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username} </p>
        <p className={styles.tag}>{tag} </p>
        <p className={styles.location}>{location} </p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileComponent;
