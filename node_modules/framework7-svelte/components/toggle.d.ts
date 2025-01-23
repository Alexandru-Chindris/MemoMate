
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

import { Toggle } from 'framework7/types';


interface ToggleProps {
  init ?: boolean;
  checked ?: boolean;
  defaultChecked ?: boolean;
  disabled ?: boolean;
  readonly ?: boolean;
  name ?: string;
  value ?: string | number | Array<any>;
  tooltip ?: string;
  tooltipTrigger ?: string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onToggleChange ?: (...args: any[]) => void;
  onChange ?: (event?: any) => void;
}



declare class Toggle extends SvelteComponent<
  ToggleProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof ToggleProps>,
  { change: CustomEvent<void>; toggleChange: CustomEvent<void>; },
  {  }
> {}

export { ToggleProps };
export default Toggle;
