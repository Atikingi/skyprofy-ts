import getCookie from './get-cookie';

const username = getCookie('username');

export const checkFavoriteTrack = (arr: any) => {
  let isFavorite = false;
  arr.forEach((user: any) => {
    if (user.username === username) {
      isFavorite = true;
    }
  });
  return isFavorite;
};
