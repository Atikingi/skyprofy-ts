export interface Svg {
  href: string
  ariaLabel: string
}

export interface PlaylistItemProps {
  trackTitleLink: string,
  trackTitleText: string,
  trackAuthorLink: string,
  trackAuthorText: string,
  trackAlbumLink: string,
  trackAlbumText: string,
  trackTime: string,
  isLoading: boolean
}

export interface PlaylistProps {
  id: string | number,
  title: string,
  tracks: PlaylistItemProps[]
}

export interface ShowHideMenu {
  menuActive: boolean
}
