
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

import { Popover } from 'framework7/types';


interface PopoverProps {
  opened ?: boolean;
  animate ?: boolean;
  targetEl ?: string | object;
  arrow ?: boolean;
  backdrop ?: boolean;
  backdropEl ?: string | object;
  closeByBackdropClick ?: boolean;
  closeByOutsideClick ?: boolean;
  closeOnEscape ?: boolean;
  containerEl ?: string | object;
  verticalPosition?: string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onPopoverOpen ?: (instance?: Popover.Popover) => void;
  onPopoverOpened ?: (instance?: Popover.Popover) => void;
  onPopoverClose ?: (instance?: Popover.Popover) => void;
  onPopoverClosed ?: (instance?: Popover.Popover) => void;
}



declare class Popover extends SvelteComponent<
  PopoverProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof PopoverProps>,
  { popoverOpen: CustomEvent<void>; popoverOpened: CustomEvent<void>; popoverClose: CustomEvent<void>; popoverClosed: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { PopoverProps };
export default Popover;
