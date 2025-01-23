
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

import { SmartSelect } from 'framework7/types';


interface LinkProps {
  noLinkClass ?: boolean;
  text ?: string;
  tabLink ?: boolean | string;
  tabLinkActive ?: boolean;
  tabbarLabel ?: boolean;
  iconOnly ?: boolean;
  badge ?: string | number;
  badgeColor ?: string;
  iconBadge ?: string | number;
  href ?: string | boolean;
  target ?: string;
  tooltip ?: string;
  tooltipTrigger ?: string;
  smartSelect ?: boolean;
  smartSelectParams ?: SmartSelect.Parameters;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  icon?: string;
  iconMaterial?: string;
  iconF7?: string;
  iconIos?: string;
  iconMd?: string;
  iconColor?: string;
  iconSize?: string | number;
  searchbarEnable?: boolean | string;
  searchbarDisable?: boolean | string;
  searchbarClear?: boolean | string;
  searchbarToggle?: boolean | string;
  panelOpen?: boolean | string;
  panelClose?: boolean | string;
  panelToggle?: boolean | string;
  popupOpen?: boolean | string;
  popupClose?: boolean | string;
  actionsOpen?: boolean | string;
  actionsClose?: boolean | string;
  popoverOpen?: boolean | string;
  popoverClose?: boolean | string;
  loginScreenOpen?: boolean | string;
  loginScreenClose?: boolean | string;
  sheetOpen?: boolean | string;
  sheetClose?: boolean | string;
  sortableEnable?: boolean | string;
  sortableDisable?: boolean | string;
  sortableToggle?: boolean | string;
  cardOpen?: boolean | string;
  cardPreventOpen?: boolean | string;
  cardClose?: boolean | string;
  menuClose?: boolean | string;
  back?: boolean;
  external?: boolean;
  force?: boolean;
  animate?: boolean;
  ignoreCache?: boolean;
  reloadCurrent?: boolean;
  reloadAll?: boolean;
  reloadPrevious?: boolean;
  reloadDetail?: boolean;
  routeTabId?: string;
  view?: string;
  routeProps?: any;
  preventRouter?: boolean;
  transition?: string;
  openIn?: string;
  onClick ?: (event?: any) => void;
}



declare class Link extends SvelteComponent<
  LinkProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof LinkProps>,
  { click: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { LinkProps };
export default Link;
