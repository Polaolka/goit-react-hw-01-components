import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';


export const Statistics = ({ title = 'Upload stats', data }) => {
    return <div className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>
      {data.map(({ id, label, percentage }) => {
        return (
          <li className={css.item} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage} %</span>
          </li>
        );
      })}
    </ul>
  </div>;
};

Statistics.prototype = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
