
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface ViewsProps {
  tabs?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class Views extends SvelteComponent<
  ViewsProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof ViewsProps>,
  {  },
  {  'default' : {}; }
> {}

export { ViewsProps };
export default Views;
