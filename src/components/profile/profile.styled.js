import styled from 'styled-components';
export const StyledProfile = styled.div`
  width: 300px;
  margin: 20px auto;
  text-align: center;
  border-radius: 15px;
  box-shadow: 2px 2px 6px -3px #303030;
  background-color: #f8f8f8;
  padding: 20px;
  &:hover {
    box-shadow: 2px 2px 10px -3px black;
    cursor: pointer;
  }
`;
export const StyledImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding-top: 30px;
`;
export const StyledName = styled.h2`
  color: #303030;
`;

export const Tag = styled.p`
  color: #989898;
  font-style: italic;
`;
export const Location = styled.p`
  color: #686868;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  border-top: solid 1px #303030;
  padding-inline: 20px;
  color: #686868;
`;

export const StatsLi = styled.li`
  list-style: none;
  padding: 30px 15px 0px;
`;

export const Label = styled.span`
  text-decoration: underline;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
