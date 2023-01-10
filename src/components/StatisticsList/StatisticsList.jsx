import PropTypes from 'prop-types';
import { Statistics } from "components/Statistics/Statistics";



export const StatisticsList = ({statistics}) => {
    return (
    <div>
            {statistics.map(statistic => (
            <Statistics key={statistic.id} statistic={statistic}/>
        ))}
    </div>
    )
};



StatisticsList.propTypes = {
    statistics: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired,
};