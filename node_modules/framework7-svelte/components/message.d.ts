
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface MessageProps {
  text ?: string;
  name ?: string;
  avatar ?: string;
  type ?: string;
  image ?: string;
  header ?: string;
  footer ?: string;
  textHeader ?: string;
  textFooter ?: string;
  first ?: boolean;
  last ?: boolean;
  tail ?: boolean;
  sameName ?: boolean;
  sameHeader ?: boolean;
  sameFooter ?: boolean;
  sameAvatar ?: boolean;
  typing ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onClick ?: (event?: any) => void;
  onClickName ?: (event?: any) => void;
  onClickText ?: (event?: any) => void;
  onClickAvatar ?: (event?: any) => void;
  onClickHeader ?: (event?: any) => void;
  onClickFooter ?: (event?: any) => void;
  onClickBubble ?: (event?: any) => void;
}



declare class Message extends SvelteComponent<
  MessageProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof MessageProps>,
  { click: CustomEvent<void>; clickName: CustomEvent<void>; clickText: CustomEvent<void>; clickAvatar: CustomEvent<void>; clickHeader: CustomEvent<void>; clickFooter: CustomEvent<void>; clickBubble: CustomEvent<void>; },
  {  'start' : {};  'avatar' : {};  'content-start' : {};  'name' : {};  'header' : {};  'bubble-start' : {};  'image' : {};  'text-header' : {};  'text' : {};  'text-footer' : {};  'bubble-end' : {};  'default' : {};  'footer' : {};  'content-end' : {};  'end' : {}; }
> {}

export { MessageProps };
export default Message;
