
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface AccordionItemProps {
  opened?: boolean;
  onAccordionBeforeOpen ?: (prevent?: any) => void;
  onAccordionOpen ?: (...args: any[]) => void;
  onAccordionOpened ?: (...args: any[]) => void;
  onAccordionBeforeClose ?: (prevent?: any) => void;
  onAccordionClose ?: (...args: any[]) => void;
  onAccordionClosed ?: (...args: any[]) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class AccordionItem extends SvelteComponent<
  AccordionItemProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof AccordionItemProps>,
  { accordionBeforeOpen: CustomEvent<void>; accordionOpen: CustomEvent<void>; accordionOpened: CustomEvent<void>; accordionBeforeClose: CustomEvent<void>; accordionClose: CustomEvent<void>; accordionClosed: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { AccordionItemProps };
export default AccordionItem;
