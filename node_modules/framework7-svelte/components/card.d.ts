
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface CardProps {
  title ?: string | number;
  content ?: string | number;
  footer ?: string | number;
  raised?: boolean;
  outline ?: boolean;
  outlineIos ?: boolean;
  outlineMd ?: boolean;
  headerDivider ?: boolean;
  footerDivider ?: boolean;
  expandable ?: boolean;
  expandableAnimateWidth ?: boolean;
  expandableOpened ?: boolean;
  animate ?: boolean;
  hideNavbarOnOpen ?: boolean;
  hideToolbarOnOpen ?: boolean;
  hideStatusbarOnOpen ?: boolean;
  scrollableEl ?: string;
  swipeToClose ?: boolean;
  closeByBackdropClick ?: boolean;
  backdrop ?: boolean;
  backdropEl ?: string;
  padding ?: boolean;
  onCardBeforeOpen ?: (el?: HTMLElement, prevent?: any) => void;
  onCardOpen ?: (el?: HTMLElement) => void;
  onCardOpened ?: (el?: HTMLElement, pageEl?: HTMLElement) => void;
  onCardClose ?: (el?: HTMLElement) => void;
  onCardClosed ?: (el?: HTMLElement, pageEl?: HTMLElement) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class Card extends SvelteComponent<
  CardProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof CardProps>,
  { cardBeforeOpen: CustomEvent<void>; cardOpen: CustomEvent<void>; cardOpened: CustomEvent<void>; cardClose: CustomEvent<void>; cardClosed: CustomEvent<void>; },
  {  'header' : {};  'content' : {};  'footer' : {};  'default' : {}; }
> {}

export { CardProps };
export default Card;
