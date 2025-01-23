
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface ToolbarProps {
  tabbar ?: boolean;
  icons ?: boolean;
  scrollable ?: boolean;
  hidden ?: boolean;
  outline ?: boolean;
  position ?: string;
  topMd ?: boolean;
  topIos ?: boolean;
  top ?: boolean;
  bottomMd ?: boolean;
  bottomIos ?: boolean;
  bottom ?: boolean;
  inner ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onToolbarHide ?: (...args: any[]) => void;
  onToolbarShow ?: (...args: any[]) => void;
}



declare class Toolbar extends SvelteComponent<
  ToolbarProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof ToolbarProps>,
  { toolbarShow: CustomEvent<void>; toolbarHide: CustomEvent<void>; },
  {  'before-inner' : {};  'default' : {};  'after-inner' : {}; }
> {}

export { ToolbarProps };
export default Toolbar;
