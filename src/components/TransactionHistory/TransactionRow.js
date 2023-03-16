import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';

export const TransactionRow = ({ type, amount, currency }) => {
  return (
    <>
          <td className={css.cell}>{type}</td>
          <td className={css.cell}>{amount}</td>
          <td className={css.cell}>{currency}</td>
    </>
  );
};

TransactionRow.prototype = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
  };