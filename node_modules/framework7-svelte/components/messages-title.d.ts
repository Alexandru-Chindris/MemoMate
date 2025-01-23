
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface MessagesTitleProps {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class MessagesTitle extends SvelteComponent<
  MessagesTitleProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof MessagesTitleProps>,
  {  },
  {  'default' : {}; }
> {}

export { MessagesTitleProps };
export default MessagesTitle;
