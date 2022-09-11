import styled from 'styled-components';

export const BurgerLine = styled.span<{ active: boolean }>`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
  transform: ${props => props.active ? 'rotate(90deg)' : 'rotate(0)'} ;

  transition: transform 0.5s;

  &:nth-child(1) {
    transform: ${props => props.active ? 'rotate(-45deg)' : 'rotate(0)'};
    margin-top: ${props => props.active ? '9px;' : '0'};
    margin-right: ${props => props.active ? '2px;' : '0'};

    transition: transform 0.5s;
  }

  &:nth-child(2) {
    transform: ${props => props.active ? 'rotate(45deg)' : 'rotate(0)'};
    margin-top: ${props => props.active ? '-5px;' : '0'};

    transition: transform 0.5s;
  }

  &:last-child {
    display: ${props => props.active ? 'none' : 'block'};
  }
`;
