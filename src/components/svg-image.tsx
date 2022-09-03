import React, { FC } from 'react';

interface Svg {
  className: string
  href: string
  ariaLabel: string
}

const SvgImage: FC<Svg> = ({ className, href, ariaLabel }) => {
  return (
        <svg className={className} aria-label={ariaLabel}>
          <use xlinkHref={href}></use>
        </svg>
  );
};

export default SvgImage;
