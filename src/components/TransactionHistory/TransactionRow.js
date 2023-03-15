import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';

export const TransactionRow = ({ type, amountCurr, currency }) => {
  return (
    <>
          <td className={css.cell}>{type}</td>
          <td className={css.cell}>{amountCurr}</td>
          <td className={css.cell}>{currency}</td>
    </>
  );
};

TransactionRow.prototype = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amountCurr: PropTypes.string.isRequired,
  };