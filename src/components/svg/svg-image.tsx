import React from 'react';
import { Svg } from '../../types';
import * as S from './svg-image.style';

const SvgImage = ({ href, ariaLabel }: Svg) => {
  return (
        <S.SVGImg aria-label={ariaLabel}>
          <use xlinkHref={href}></use>
        </S.SVGImg>
  );
};

export default SvgImage;
