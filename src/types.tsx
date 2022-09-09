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
  isLoading?: true | false
}

export interface ShowHideMenu {
  menuActive: boolean
}
