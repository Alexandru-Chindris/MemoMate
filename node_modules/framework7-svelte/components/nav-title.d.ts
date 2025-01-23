
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface NavTitleProps {
  title ?: string;
  subtitle ?: string;
  sliding ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class NavTitle extends SvelteComponent<
  NavTitleProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof NavTitleProps>,
  {  },
  {  'default' : {}; }
> {}

export { NavTitleProps };
export default NavTitle;
