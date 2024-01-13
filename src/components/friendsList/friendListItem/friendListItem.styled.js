import styled from 'styled-components';
export const ListImg = styled.img`
  width: 48px;
`;

export const ListName = styled.p`
  font-style: italic;
  font-weight: 700;
`;

export const ListLi = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 20px 0;
  &:hover {
    border-radius: 15px;
    box-shadow: 2px 2px 6px -3px black;
    cursor: pointer;
  }
`;

export const ListSpan = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;

  &.online {
    background-color: green;
  }

  &.offline {
    background-color: red;
  }
`;
