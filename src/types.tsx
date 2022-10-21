export interface Svg {
  href: string
  ariaLabel: string
}

export interface PlaylistItemProps {
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

export interface PlaylistProps {
  id: string | number,
  title: string,
  tracks: PlaylistItemProps[]
}

export interface ShowHideMenu {
  menuActive: boolean
}
