import PropTypes from 'prop-types';
import { ItemsTable, ItemsTd, ItemTr, Thead } from './transactions.styled';
const TransactionHistory = ({ items }) => {
  return (
    <ItemsTable>
      <Thead>
        <ItemTr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </ItemTr>
      </Thead>
      <tbody>
        {items.map(item => (
          <ItemTr key={item.id}>
            <ItemsTd>{item.type}</ItemsTd>
            <ItemsTd>{item.amount}</ItemsTd>
            <ItemsTd>{item.currency}</ItemsTd>
          </ItemTr>
        ))}
      </tbody>
    </ItemsTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
export default TransactionHistory;
