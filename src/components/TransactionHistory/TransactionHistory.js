import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';
import { TransactionRow } from './TransactionRow';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.headCell}>Type</th>
          <th className={css.headCell}>Amount</th>
          <th className={css.headCell}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.row} key={id}>
              <TransactionRow type={type} amount={amount} currency={currency} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.object).isRequired
}

