
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface ActionsButtonProps {
  strong?: boolean;
  close?: boolean;
  onClick ?: (event?: any) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class ActionsButton extends SvelteComponent<
  ActionsButtonProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof ActionsButtonProps>,
  { click: CustomEvent<void>; },
  {  'media' : {};  'default' : {}; }
> {}

export { ActionsButtonProps };
export default ActionsButton;
