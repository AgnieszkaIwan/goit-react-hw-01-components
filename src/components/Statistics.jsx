import styles from '../components/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  if (!stats || stats.length === 0) {
    return null; // Jeśli dane są puste lub niezdefiniowane, zwracamy null lub komunikat o ładowaniu
  }

  return (
    <div className={styles.statDataContainer}>
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.statList}>
          {stats.map(stats => (
            <li className={styles.item} key={stats.id}>
              <span className={styles.label}>{stats.label}</span>
              <span class={styles.percentage}>{stats.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Statistics;
