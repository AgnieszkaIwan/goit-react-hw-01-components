import data from '../data.json';

export const Statistics = () => {
  const { title, stats } = data;

  if (!stats || stats.length === 0) {
    return null; // Jeśli dane są puste lub niezdefiniowane, zwracamy null lub komunikat o ładowaniu
  }

  return (
    <div className="statDataContainer">
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        <ul className="stat-list">
          {stats.map(stat => (
            <li className="item" key={stat.id}>
              <span className="label">{stat.label}</span>
              <span class="percentage">{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Statistics;
