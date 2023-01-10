import PropTypes from 'prop-types';

export const Transactions = ({ transaction: { type, amount, currency } }) => {
    return (
        <div>
            <h2>{type}</h2>
            <h2>{amount}</h2>
            <h2>{currency}</h2>
        </div>
    );
};

Transactions.propTypes = {
    transaction: PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
};