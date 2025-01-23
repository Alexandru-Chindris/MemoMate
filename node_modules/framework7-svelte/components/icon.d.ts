
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface IconProps {
  material ?: string;
  f7 ?: string;
  icon ?: string;
  ios ?: string;
  md ?: string;
  tooltip ?: string;
  tooltipTrigger ?: string;
  size ?: string | number;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class Icon extends SvelteComponent<
  IconProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof IconProps>,
  {  },
  {  'default' : {}; }
> {}

export { IconProps };
export default Icon;
