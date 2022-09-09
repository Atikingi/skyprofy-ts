import React from 'react';

interface PropsType {
  name: string,
}

const SidebarUser = ({ name }: PropsType) => {
  return (
        <div className="sidebar__personal">
            <p className="sidebar__personal-name">{name}</p>
            <div className="sidebar__avatar"></div>
        </div>
  );
};

export default SidebarUser;
