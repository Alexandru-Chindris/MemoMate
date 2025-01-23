
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface SwipeoutActionsProps {
  left ?: boolean;
  right ?: boolean;
  side ?: string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class SwipeoutActions extends SvelteComponent<
  SwipeoutActionsProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof SwipeoutActionsProps>,
  {  },
  {  'default' : {}; }
> {}

export { SwipeoutActionsProps };
export default SwipeoutActions;
