
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface NavLeftProps {
  backLink ?: boolean | string;
  backLinkUrl ?: string;
  backLinkForce ?: boolean;
  backLinkShowText ?: boolean;
  sliding ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onBackClick ?: (event?: any) => void;
  onClickBack ?: (event?: any) => void;
}



declare class NavLeft extends SvelteComponent<
  NavLeftProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof NavLeftProps>,
  { clickBack: CustomEvent<void>; backClick: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { NavLeftProps };
export default NavLeft;
