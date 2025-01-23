
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface AccordionContentProps {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class AccordionContent extends SvelteComponent<
  AccordionContentProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof AccordionContentProps>,
  {  },
  {  'default' : {}; }
> {}

export { AccordionContentProps };
export default AccordionContent;
