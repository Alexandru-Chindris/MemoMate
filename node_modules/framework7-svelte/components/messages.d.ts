
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

import { Messages } from 'framework7/types';


interface MessagesProps {
  autoLayout ?: boolean;
  messages ?: Array<any>;
  newMessagesFirst ?: boolean;
  scrollMessages ?: boolean;
  scrollMessagesOnEdge ?: boolean;
  typing?: boolean;
  firstMessageRule ?: Function;
  lastMessageRule ?: Function;
  tailMessageRule ?: Function;
  sameNameMessageRule ?: Function;
  sameHeaderMessageRule ?: Function;
  sameFooterMessageRule ?: Function;
  sameAvatarMessageRule ?: Function;
  customClassMessageRule ?: Function;
  renderMessage ?: Function;
  init ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class Messages extends SvelteComponent<
  MessagesProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof MessagesProps>,
  {  },
  {  'default' : {}; }
> {}

export { MessagesProps };
export default Messages;
