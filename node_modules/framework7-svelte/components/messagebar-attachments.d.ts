
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface MessagebarAttachmentsProps {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class MessagebarAttachments extends SvelteComponent<
  MessagebarAttachmentsProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof MessagebarAttachmentsProps>,
  {  },
  {  'default' : {}; }
> {}

export { MessagebarAttachmentsProps };
export default MessagebarAttachments;
