
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface BlockFooterProps {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class BlockFooter extends SvelteComponent<
  BlockFooterProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof BlockFooterProps>,
  {  },
  {  'default' : {}; }
> {}

export { BlockFooterProps };
export default BlockFooter;
