export interface TextsElements {
  className: string,
  text: string,
}

export interface ControlButtonsProps {
  className: string,
  imageClassName: string,
  imageHref: string,
  ariaLabel: string,
}

export interface Track {
  trackLink: string,
  trackName: string,
  authorLink: string,
  authorName: string,
}

export interface PlaylistItemProps {
  trackTitleLink: string,
  trackTitleText: string,
  trackAuthorLink: string,
  trackAuthorText: string,
  trackAlbumLink: string,
  trackAlbumText: string,
  trackTime: string,
}

export interface MenuLink {
  href: string,
  text: string,
}

export interface LogoProps {
  src: string,
  alt: string,
}

export interface SidebarItem {
  href: string,
  src: string,
  alt: string,
}

export interface UserInfo {
  name: string,
}
