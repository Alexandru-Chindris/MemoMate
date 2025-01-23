
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface AccordionToggleProps {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class AccordionToggle extends SvelteComponent<
  AccordionToggleProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof AccordionToggleProps>,
  {  },
  {  'default' : {}; }
> {}

export { AccordionToggleProps };
export default AccordionToggle;
