
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface NavTitleLargeProps {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class NavTitleLarge extends SvelteComponent<
  NavTitleLargeProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof NavTitleLargeProps>,
  {  },
  {  'default' : {}; }
> {}

export { NavTitleLargeProps };
export default NavTitleLarge;
