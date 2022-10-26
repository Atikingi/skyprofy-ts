import getCookie from './get-cookie';
import { StaredUserProps } from '../types';

export const checkFavoriteTrack = (arr: StaredUserProps[] | undefined) => {
  const cookieUsername = getCookie('username');
  let isFavorite = false;

  arr?.forEach(({ username }: StaredUserProps) => {
    if (username === cookieUsername) {
      isFavorite = true;
    }
  });
  return isFavorite;
};
