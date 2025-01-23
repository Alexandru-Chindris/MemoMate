
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface BlockProps {
  inset?: boolean;
  insetIos?: boolean;
  insetMd?: boolean;
  xsmallInset?: boolean;
  xsmallInsetIos?: boolean;
  xsmallInsetMd?: boolean;
  smallInset?: boolean;
  smallInsetIos?: boolean;
  smallInsetMd?: boolean;
  mediumInset?: boolean;
  mediumInsetIos?: boolean;
  mediumInsetMd?: boolean;
  largeInset?: boolean;
  largeInsetIos?: boolean;
  largeInsetMd?: boolean;
  xlargeInset?: boolean;
  xlargeInsetIos?: boolean;
  xlargeInsetMd?: boolean;
  strong?: boolean;
  strongIos?: boolean;
  strongMd?: boolean;
  outline?: boolean;
  outlineIos?: boolean;
  outlineMd?: boolean;
  tabs?: boolean;
  tab?: boolean;
  tabActive?: boolean;
  accordionList?: boolean;
  accordionOpposite?: boolean;
  onTabShow?: (el?: HTMLElement) => void;
  onTabHide?: (el?: HTMLElement) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class Block extends SvelteComponent<
  BlockProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof BlockProps>,
  {  },
  {  'default' : {}; }
> {}

export { BlockProps };
export default Block;
