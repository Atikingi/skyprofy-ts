import styled from 'styled-components';

export const Navigation = styled.div<{ isDarkTheme: boolean }>`
  --bg-color: ${props => props.isDarkTheme ? '#181818' : '#FFFFFF'};
  width: 244px;
  background-color: var(--bg-color);
  padding: 20px 0 20px 36px;
  transition: background-color 0.5s ease;
`;

export const NavigationLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;

export const LogoImage = styled.img`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;

export const Burger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :hover {
    cursor: pointer;
  }
`;
