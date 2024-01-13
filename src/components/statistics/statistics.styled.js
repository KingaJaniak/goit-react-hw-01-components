import styled from 'styled-components';
export const StatsDiv = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid 2px grey;
  width: 300px;
  text-align: center;
  margin: 20px auto;
  border-radius: 30px;
`;
export const Title = styled.h2`
  font-weight: 700;
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;
export const Li = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;
export const Label = styled.span`
  font-style: italic;
`;
export const Percentage = styled.span`
  font-weight: 700;
`;
