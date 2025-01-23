
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface MessagebarAttachmentProps {
  image ?: string;
  deletable ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onAttachmentClick ?: (event?: any) => void;
  onAttachmentDelete ?: (event?: any) => void;
}



declare class MessagebarAttachment extends SvelteComponent<
  MessagebarAttachmentProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof MessagebarAttachmentProps>,
  { attachmentClick: CustomEvent<void>; attachmentDelete: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { MessagebarAttachmentProps };
export default MessagebarAttachment;
