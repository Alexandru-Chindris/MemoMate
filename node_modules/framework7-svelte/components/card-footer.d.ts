
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface CardFooterProps {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class CardFooter extends SvelteComponent<
  CardFooterProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof CardFooterProps>,
  {  },
  {  'default' : {}; }
> {}

export { CardFooterProps };
export default CardFooter;
