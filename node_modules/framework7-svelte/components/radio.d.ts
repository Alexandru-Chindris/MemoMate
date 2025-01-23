
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface RadioProps {
  checked ?: boolean;
  name ?: number | string;
  value ?: number | string | boolean;
  disabled ?: boolean;
  readonly ?: boolean;
  defaultChecked ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onChange ?: (event?: any) => void;
}



declare class Radio extends SvelteComponent<
  RadioProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof RadioProps>,
  { change: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { RadioProps };
export default Radio;
