import React, { ReactElement } from 'react';

interface Svg {
  className: string
  href: string
  ariaLabel: string
}

function SvgImage ({ className, href, ariaLabel }: Svg): ReactElement<HTMLOrSVGImageElement> {
  return (
        <svg className={className} aria-label={ariaLabel}>
          <use xlinkHref={href}></use>
        </svg>
  );
}

export default SvgImage;
