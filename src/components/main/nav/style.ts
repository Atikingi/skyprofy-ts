import styled from 'styled-components';

export const Navigation = styled.div`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
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
