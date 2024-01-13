import styled from 'styled-components';
export const Thead = styled.thead`
  background-color: #676767;
  color: #fff;
`;
export const ItemsTable = styled.table`
  width: 300px;
  margin: 20px auto;
  border: solid 2px grey;
`;
export const ItemsTd = styled.td`
  padding: 10px;
`;
export const ItemTr = styled.tr`
  &:nth-child(2n) {
    background-color: lightgrey;
  }
`;
