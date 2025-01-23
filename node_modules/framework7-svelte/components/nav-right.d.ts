
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface NavRightProps {
  sliding ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class NavRight extends SvelteComponent<
  NavRightProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof NavRightProps>,
  {  },
  {  'default' : {}; }
> {}

export { NavRightProps };
export default NavRight;
