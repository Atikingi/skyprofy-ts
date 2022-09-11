import styled from 'styled-components';

export const SearchBlock = styled.div`
  width: 100%;
  border-bottom: 1px solid #4E4E4E;
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchSVGWrapper = styled.div`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #FFFFFF;
  fill: transparent;
`;

export const SearchInput = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  outline: none;

  &::placeholder {
    background-color: transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
