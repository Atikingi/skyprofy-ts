export interface Svg {
  href: string
  ariaLabel: string
}

export interface PlaylistItemProps {
  key: string,
  id: string,
  trackTitleLink: string,
  trackTitleText: string,
  trackAuthorLink: string,
  trackAuthorText: string,
  trackAlbumLink: string,
  trackAlbumText: string,
  trackTime: string,
  isFavorite: boolean
}

export interface TrackProps {
  id: string,
  name: string,
  author: string,
  release_date: string,
  genre: string,
  duration_in_seconds: number,
  album: string,
  logo?: null,
  track_file: string,
  stared_user?: StaredUserProps[]
}

export interface PlaylistProps {
  id: string,
  title: string,
  tracks: PlaylistItemProps[]
}

export interface CustomPlaylistProps {
  id: string,
  name: string,
  items: TrackProps[],
}

export interface ShowHideMenu {
  menuActive: boolean
}

export interface StaredUserProps {
  id: string,
  username: string,
  first_name: string,
  last_name: string,
  email: string
}
