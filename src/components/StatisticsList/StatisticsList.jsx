import PropTypes from 'prop-types';
import { Statistics } from "components/Statistics/Statistics";
import css from './StatisticsList.module.css'


export const StatisticsList = ({title, statistics}) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title.toUpperCase()}</h2>
            <ul className={css.statList}>
                
            {statistics.map(statistic => (
                <Statistics
                    key={statistic.id}
                    statistic={statistic}
                />
            ))}
            </ul>
            </section>
    )
};



StatisticsList.propTypes = {
    statistics: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired,
};