import styled from 'styled-components';

export const Menu = styled.div<{active: boolean}>`
  display: block;
  visibility: visible;
  transform: ${(props) => props.active ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.5s;
`;

export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
`;

export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`;

export const MenuLink = styled.a`
  color: #FFFFFF;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  :hover{
    color: #D9B6FF;
  }
`;
