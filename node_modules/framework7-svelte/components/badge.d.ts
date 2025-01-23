
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

import { Tooltip } from 'framework7/types';


interface BadgeProps {
  tooltip?: string;
  tooltipTrigger?: string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class Badge extends SvelteComponent<
  BadgeProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof BadgeProps>,
  {  },
  {  'default' : {}; }
> {}

export { BadgeProps };
export default Badge;
