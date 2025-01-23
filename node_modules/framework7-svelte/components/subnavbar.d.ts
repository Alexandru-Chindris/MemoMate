
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface SubnavbarProps {
  sliding ?: boolean;
  title ?: string;
  inner ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class Subnavbar extends SvelteComponent<
  SubnavbarProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof SubnavbarProps>,
  {  },
  {  'default' : {}; }
> {}

export { SubnavbarProps };
export default Subnavbar;
