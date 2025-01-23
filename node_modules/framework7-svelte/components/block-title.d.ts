
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface BlockTitleProps {
  large?: boolean;
  medium?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class BlockTitle extends SvelteComponent<
  BlockTitleProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof BlockTitleProps>,
  {  },
  {  'default' : {}; }
> {}

export { BlockTitleProps };
export default BlockTitle;
