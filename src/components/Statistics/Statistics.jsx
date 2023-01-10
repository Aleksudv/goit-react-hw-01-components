import PropTypes from 'prop-types';

export const Statistics = ({ statistic: { label, percentage } }) => {
    return (
        <div>
            <h2>{label}</h2>
            <h2>{percentage}</h2>
        </div>
    );
};

Statistics.propTypes = {
    statistic: PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
};