import PropTypes from 'prop-types';
import { Transactions } from "components/Transactions/Transactions";



export const TransactionList = ({transactions}) => {
    return (
    <div>
            {transactions.map(transaction => (
            <Transactions key={transaction.id} transaction={transaction}/>
        ))}
    </div>
    )
};



TransactionList.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired,
};