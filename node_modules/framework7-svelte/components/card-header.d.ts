
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface CardHeaderProps {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class CardHeader extends SvelteComponent<
  CardHeaderProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof CardHeaderProps>,
  {  },
  {  'default' : {}; }
> {}

export { CardHeaderProps };
export default CardHeader;
