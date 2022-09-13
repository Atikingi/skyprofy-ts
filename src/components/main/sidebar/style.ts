import styled from 'styled-components';

const COLORS = {
  'sidebar-background': '#313131',
  'sidebar-name': '#ffffff',
  'sidebar-avatar': '#313131'
};

export const Sidebar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
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

export const SidebarUserName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS['sidebar-name']};
  margin-right: 16px;
`;

export const SidebarUserAvatar = styled.div`
  width: 43px;
  height: 43px;
  background-color: ${COLORS['sidebar-avatar']};
  border-radius: 50%;
`;
