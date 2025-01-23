
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface AccordionProps {
  accordionOpposite?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class Accordion extends SvelteComponent<
  AccordionProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof AccordionProps>,
  {  },
  {  'default' : {}; }
> {}

export { AccordionProps };
export default Accordion;
