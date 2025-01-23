
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface ActionsGroupProps {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class ActionsGroup extends SvelteComponent<
  ActionsGroupProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof ActionsGroupProps>,
  {  },
  {  'default' : {}; }
> {}

export { ActionsGroupProps };
export default ActionsGroup;
