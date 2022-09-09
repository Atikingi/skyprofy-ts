import React from 'react';
import { Svg } from '../types';

const SvgImage = ({ href, ariaLabel }: Svg) => {
  return (
        <svg className="svg" aria-label={ariaLabel}>
          <use xlinkHref={href}></use>
        </svg>
  );
};

export default SvgImage;
