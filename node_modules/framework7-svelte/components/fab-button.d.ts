
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface FabButtonProps {
  fabClose ?: boolean;
  label ?: string;
  target ?: string;
  tooltip ?: string;
  tooltipTrigger ?: string;
  onClick ?: (event?: any) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class FabButton extends SvelteComponent<
  FabButtonProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof FabButtonProps>,
  { click: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { FabButtonProps };
export default FabButton;
