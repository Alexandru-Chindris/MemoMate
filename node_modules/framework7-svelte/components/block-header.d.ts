
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface BlockHeaderProps {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class BlockHeader extends SvelteComponent<
  BlockHeaderProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof BlockHeaderProps>,
  {  },
  {  'default' : {}; }
> {}

export { BlockHeaderProps };
export default BlockHeader;
