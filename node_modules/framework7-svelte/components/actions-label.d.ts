
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface ActionsLabelProps {
  strong?: boolean;
  onClick?: (event?: any) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class ActionsLabel extends SvelteComponent<
  ActionsLabelProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof ActionsLabelProps>,
  { click: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { ActionsLabelProps };
export default ActionsLabel;
