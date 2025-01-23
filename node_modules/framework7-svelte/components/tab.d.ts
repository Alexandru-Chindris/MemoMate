
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface TabProps {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  tabActive ?: boolean;
  onTabShow ?: (el?: HTMLElement) => void;
  onTabHide ?: (el?: HTMLElement) => void;
}



declare class Tab extends SvelteComponent<
  TabProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof TabProps>,
  { tabRouterDidUpdate: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { TabProps };
export default Tab;
