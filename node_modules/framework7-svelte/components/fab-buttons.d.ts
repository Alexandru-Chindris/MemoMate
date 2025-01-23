
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface FabButtonsProps {
  position?: string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class FabButtons extends SvelteComponent<
  FabButtonsProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof FabButtonsProps>,
  {  },
  {  'default' : {}; }
> {}

export { FabButtonsProps };
export default FabButtons;
