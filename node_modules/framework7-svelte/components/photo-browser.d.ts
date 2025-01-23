
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

import { PhotoBrowser } from 'framework7/types';


interface PhotoBrowserProps {
  init ?: boolean;
  params ?: Object;
  photos ?: Array<any>;
  thumbs ?: Array<any>;
  exposition ?: boolean;
  expositionHideCaptions ?: boolean;
  type ?: string;
  navbar ?: boolean;
  toolbar ?: boolean;
  theme ?: string;
  captionsTheme ?: string;
  iconsColor ?: string;
  swipeToClose ?: boolean;
  pageBackLinkText ?: string;
  popupCloseLinkIcon ?: boolean;
  popupCloseLinkText ?: string;
  navbarOfText ?: string;
  navbarShowCount ?: boolean;
  swiper ?: Object;
  url ?: string;
  routableModals ?: boolean;
  virtualSlides ?: boolean;
  view ?: string | object;
  renderNavbar ?: Function;
  renderToolbar ?: Function;
  renderCaption ?: Function;
  renderObject ?: Function;
  renderLazyPhoto ?: Function;
  renderPhoto ?: Function;
  renderPage ?: Function;
  renderPopup ?: Function;
  renderStandalone ?: Function;
  renderThumb?: Function;
  onPhotoBrowserOpen ?: (...args: any[]) => void;
  onPhotoBrowserClose ?: (...args: any[]) => void;
  onPhotoBrowserOpened ?: (...args: any[]) => void;
  onPhotoBrowserClosed ?: (...args: any[]) => void;
  onPhotoBrowserSwipeToClose ?: (...args: any[]) => void;
}



declare class PhotoBrowser extends SvelteComponent<
  PhotoBrowserProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof PhotoBrowserProps>,
  { photoBrowserOpen: CustomEvent<void>; photoBrowserClose: CustomEvent<void>; photoBrowserOpened: CustomEvent<void>; photoBrowserClosed: CustomEvent<void>; photoBrowserSwipeToClose: CustomEvent<void>; },
  {  }
> {}

export { PhotoBrowserProps };
export default PhotoBrowser;
