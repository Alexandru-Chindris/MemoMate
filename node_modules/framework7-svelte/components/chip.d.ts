
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface ChipProps {
  media ?: string;
  text ?: string | number;
  deleteable ?: boolean;
  mediaBgColor ?: string;
  mediaTextColor ?: string;
  outline ?: boolean;
  tooltip ?: string;
  tooltipTrigger ?: string;
  onClick ?: (event?: any) => void;
  onDelete ?: (event?: any) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  icon?: string;
  iconMaterial?: string;
  iconF7?: string;
  iconIos?: string;
  iconMd?: string;
  iconColor?: string;
  iconSize?: string | number;
}



declare class Chip extends SvelteComponent<
  ChipProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof ChipProps>,
  { click: CustomEvent<void>; delete: CustomEvent<void>; },
  {  'media' : {};  'text' : {};  'default' : {}; }
> {}

export { ChipProps };
export default Chip;
