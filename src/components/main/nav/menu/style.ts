import styled from 'styled-components';

const COLORS = {
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
  --color: ${props => props.isDarkTheme ? '#FFFFFF' : '#000000'};
  padding: 5px 0;
  margin-bottom: 16px;
  color: var(--color);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  :hover{
    color: ${COLORS['menu-link-hover']};
  }
`;

export const ThemeToggleButtonWrapper = styled.div<{isDarkTheme: boolean}>`
  --color: ${props => props.isDarkTheme ? '#FFFFFF' : '#000000'};
  cursor: pointer;
  color: var(--color);
  `;
