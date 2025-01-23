
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

import { Popup } from 'framework7/types';


interface PopupProps {
  tabletFullscreen ?: boolean;
  opened ?: boolean;
  animate ?: boolean;
  backdrop ?: boolean;
  backdropEl ?: string | object;
  closeByBackdropClick ?: boolean;
  closeOnEscape ?: boolean;
  swipeToClose ?: boolean | string;
  swipeHandler ?: string | object;
  push ?: boolean;
  containerEl?: string | object;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onPopupSwipeStart ?: (instance?: Popup.Popup) => void;
  onPopupSwipeMove ?: (instance?: Popup.Popup) => void;
  onPopupSwipeEnd ?: (instance?: Popup.Popup) => void;
  onPopupSwipeClose ?: (instance?: Popup.Popup) => void;
  onPopupOpen ?: (instance?: Popup.Popup) => void;
  onPopupOpened ?: (instance?: Popup.Popup) => void;
  onPopupClose ?: (instance?: Popup.Popup) => void;
  onPopupClosed ?: (instance?: Popup.Popup) => void;
}



declare class Popup extends SvelteComponent<
  PopupProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof PopupProps>,
  { popupSwipeStart: CustomEvent<void>; popupSwipeMove: CustomEvent<void>; popupSwipeEnd: CustomEvent<void>; popupSwipeClose: CustomEvent<void>; popupOpen: CustomEvent<void>; popupOpened: CustomEvent<void>; popupClose: CustomEvent<void>; popupClosed: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { PopupProps };
export default Popup;
