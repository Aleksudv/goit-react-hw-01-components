import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ statistic: {label, percentage } }) => {
    return (
                    <li className={css.item}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>
    );
};



Statistics.propTypes = {
    statistic: PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
};