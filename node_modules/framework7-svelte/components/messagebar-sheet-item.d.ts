
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface MessagebarSheetItemProps {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class MessagebarSheetItem extends SvelteComponent<
  MessagebarSheetItemProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof MessagebarSheetItemProps>,
  {  },
  {  'default' : {}; }
> {}

export { MessagebarSheetItemProps };
export default MessagebarSheetItem;
