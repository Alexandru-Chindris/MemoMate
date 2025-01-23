
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface NavbarProps {
  backLink ?: boolean | string;
  backLinkUrl ?: string;
  backLinkForce ?: boolean;
  backLinkShowText ?: boolean;
  sliding ?: boolean;
  title ?: string;
  subtitle ?: string;
  hidden ?: boolean;
  outline ?: boolean;
  innerClass ?: string;
  innerClassName ?: string;
  large ?: boolean;
  largeTransparent ?: boolean;
  transparent ?: boolean;
  titleLarge ?: string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onNavbarHide ?: (...args: any[]) => void;
  onNavbarShow ?: (...args: any[]) => void;
  onNavbarExpand ?: (...args: any[]) => void;
  onNavbarCollapse ?: (...args: any[]) => void;
  onNavbarTransparentShow ?: (...args: any[]) => void;
  onNavbarTransparentHide ?: (...args: any[]) => void;
  onBackClick ?: (event?: any) => void;
  onClickBack ?: (event?: any) => void;
}



declare class Navbar extends SvelteComponent<
  NavbarProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof NavbarProps>,
  { navbarHide: CustomEvent<void>; navbarShow: CustomEvent<void>; navbarTransparentShow: CustomEvent<void>; navbarTransparentHide: CustomEvent<void>; navbarExpand: CustomEvent<void>; navbarCollapse: CustomEvent<void>; clickBack: CustomEvent<void>; },
  {  'before-inner' : {};  'nav-left' : {};  'left' : {};  'title' : {};  'nav-right' : {};  'right' : {};  'title-large' : {};  'default' : {};  'after-inner' : {}; }
> {}

export { NavbarProps };
export default Navbar;
