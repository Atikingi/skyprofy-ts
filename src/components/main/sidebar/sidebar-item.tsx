import React from 'react';

interface PropsType {
  href: string,
  src: string,
  alt: string,
  isLoading?: true | false
}

const SidebarListItem = ({ href, src, alt, isLoading }: PropsType) => {
  return (
    <div
      className={
        (isLoading === true) ? 'sidebar__item sidebar__item_load' : 'sidebar__item'
      }
    >
      <a className="sidebar__link" href={href}>
        <img
          className={
            (isLoading === true) ? 'sidebar__img sidebar__img_load' : 'sidebar__img'
          }
          src={src}
          alt={alt}
        />
      </a>
    </div>
  );
};

export default SidebarListItem;
