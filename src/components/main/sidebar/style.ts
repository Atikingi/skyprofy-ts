import styled from 'styled-components';

const COLORS = {
  'sidebar-background': '#313131',
  'sidebar-avatar': '#313131'
};

export const Sidebar = styled.aside<{isDarkTheme: boolean, isShow: boolean}>`
  --color: ${props => props.isDarkTheme ? '#181818' : '#ffffff'};
  --position-right: ${props => props.isShow ? '0' : '-100%'};
  max-width: 418px;
  padding: 20px 90px 20px 78px;
  transition: right 0.5s;

  @media (max-width: 1889px) {
    position: absolute;
    background-color: var(--color);
    right: var(--position-right);
  }
`;

export const SidebarBlock = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SidebarList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const SidebarItem = styled.div`
  position: relative;
  width: 250px;
  height: 150px;

  background-color: ${COLORS['sidebar-background']};
  overflow: hidden;
  cursor: pointer;
`;

export const SidebarImage = styled.img`
  width: 100%;
  height: auto;
`;

export const SidebarUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
`;

export const SidebarUserName = styled.p<{isDarkTheme: boolean}>`
  --color: ${props => props.isDarkTheme ? '#ffffff' : '#000000'};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--color);
  margin-right: 16px;
`;

export const SidebarUserAvatar = styled.div`
  width: 43px;
  height: 43px;
  background-color: ${COLORS['sidebar-avatar']};
  border-radius: 50%;
`;
