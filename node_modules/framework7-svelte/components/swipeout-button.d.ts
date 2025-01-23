
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface SwipeoutButtonProps {
  text ?: string;
  confirmTitle ?: string;
  confirmText ?: string;
  overswipe ?: boolean;
  close ?: boolean;
  delete ?: boolean;
  href ?: string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onClick ?: (event?: any) => void;
}



declare class SwipeoutButton extends SvelteComponent<
  SwipeoutButtonProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof SwipeoutButtonProps>,
  { click: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { SwipeoutButtonProps };
export default SwipeoutButton;
