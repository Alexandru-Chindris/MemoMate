
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface CheckboxProps {
  checked ?: boolean;
  indeterminate ?: boolean;
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



declare class Checkbox extends SvelteComponent<
  CheckboxProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof CheckboxProps>,
  { change: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { CheckboxProps };
export default Checkbox;
