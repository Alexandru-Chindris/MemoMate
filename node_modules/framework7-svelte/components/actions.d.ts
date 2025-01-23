
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

import { Actions } from 'framework7/types';


interface ActionsProps {
  opened ?: boolean;
  animate ?: boolean;
  grid ?: boolean;
  convertToPopover ?: boolean;
  forceToPopover ?: boolean;
  target ?: string | object;
  backdrop ?: boolean;
  backdropEl ?: string | object;
  closeByBackdropClick ?: boolean;
  closeByOutsideClick ?: boolean;
  closeOnEscape ?: boolean;
  onActionsOpen ?: (instance?: Actions.Actions) => void;
  onActionsOpened ?: (instance?: Actions.Actions) => void;
  onActionsClose ?: (instance?: Actions.Actions) => void;
  onActionsClosed ?: (instance?: Actions.Actions) => void;
  containerEl ?: string | object;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class Actions extends SvelteComponent<
  ActionsProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof ActionsProps>,
  { actionsOpen: CustomEvent<void>; actionsOpened: CustomEvent<void>; actionsClose: CustomEvent<void>; actionsClosed: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { ActionsProps };
export default Actions;
