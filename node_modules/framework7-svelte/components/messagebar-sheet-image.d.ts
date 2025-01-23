
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface MessagebarSheetImageProps {
  image ?: string;
  checked ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onChecked ?: (event?: any) => void;
  onUnchecked ?: (event?: any) => void;
  onChange ?: (event?: any) => void;
}



declare class MessagebarSheetImage extends SvelteComponent<
  MessagebarSheetImageProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof MessagebarSheetImageProps>,
  { checked: CustomEvent<void>; unchecked: CustomEvent<void>; change: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { MessagebarSheetImageProps };
export default MessagebarSheetImage;
