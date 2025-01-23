
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface FabProps {
  morphTo ?: string;
  href ?: boolean | string;
  target ?: string;
  text ?: string;
  position ?: string;
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



declare class Fab extends SvelteComponent<
  FabProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof FabProps>,
  { click: CustomEvent<void>; },
  {  'default' : {};  'text' : {};  'link' : {};  'root' : {}; }
> {}

export { FabProps };
export default Fab;
