
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface CardContentProps {
  padding?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class CardContent extends SvelteComponent<
  CardContentProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof CardContentProps>,
  {  },
  {  'default' : {}; }
> {}

export { CardContentProps };
export default CardContent;
