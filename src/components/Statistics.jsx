export const Statistics = ({ title, stats }) => {
  if (!stats || stats.length === 0) {
    return null; // Jeśli dane są puste lub niezdefiniowane, zwracamy null lub komunikat o ładowaniu
  }

  return (
    <div className="statDataContainer">
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        <ul className="stat-list">
          {stats.map(stats => (
            <li className="item" key={stats.id}>
              <span className="label">{stats.label}</span>
              <span class="percentage">{stats.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Statistics;
