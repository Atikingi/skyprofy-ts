import styled from 'styled-components';

export const FilterButton = styled.div<{isActive: boolean}>`
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: ${props => props.isActive ? '1px solid #9A48F1' : '1px solid #FFFFFF'};
  border-radius: 60px;
  padding: 6px 20px;
  color: ${props => props.isActive ? '#B672FF' : ''};

  :hover {
    border-color: #D9B6FF;
    color: #D9B6FF;
    cursor: pointer;
  }

  :active {
    border-color: #AD61FF;
    color: #AD61FF;
    cursor: pointer;
  }
`;

export const FilterButtonCount = styled.div<{isActive: boolean}>`
  position: absolute;
  top: -10px;
  right: -10px;

  display: ${props => props.isActive ? 'block' : 'none'};
  width: 26px;
  height: 25.5px;

  text-align: center;
  color: #FFFFFF;

  background: #AD61FF;
  border-radius: 50%;
`;
