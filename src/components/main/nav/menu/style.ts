import styled from 'styled-components';

const COLORS = {
  'menu-link-dark': '#FFFFFF',
  'menu-link-light': '#000000',
  'menu-link-hover': '#D9B6FF'
};

export const Menu = styled.div<{active: boolean}>`
  display: block;
  visibility: visible;
  transform: ${(props) => props.active ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.5s;
`;

export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
`;

export const MenuItem = styled.li<{ isDarkTheme: boolean }>`
  padding: 5px 0;
  margin-bottom: 16px;
  color: ${props => props.isDarkTheme ? COLORS['menu-link-dark'] : COLORS['menu-link-light']};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  :hover{
    color: ${COLORS['menu-link-hover']};
  }
`;

export const ThemeToggleButton = styled.img`
  cursor: pointer;
`;
