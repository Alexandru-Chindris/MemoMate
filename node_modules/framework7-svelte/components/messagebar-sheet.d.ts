
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface MessagebarSheetProps {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class MessagebarSheet extends SvelteComponent<
  MessagebarSheetProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof MessagebarSheetProps>,
  {  },
  {  'default' : {}; }
> {}

export { MessagebarSheetProps };
export default MessagebarSheet;
