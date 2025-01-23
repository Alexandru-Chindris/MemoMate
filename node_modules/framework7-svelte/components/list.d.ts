
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

import { VirtualList } from 'framework7/types';


interface ListProps {
  inset ?: boolean;
  insetIos ?: boolean;
  insetMd ?: boolean;
  xsmallInset ?: boolean;
  xsmallInsetIos ?: boolean;
  xsmallInsetMd ?: boolean;
  smallInset ?: boolean;
  smallInsetIos ?: boolean;
  smallInsetMd ?: boolean;
  mediumInset ?: boolean;
  mediumInsetIos ?: boolean;
  mediumInsetMd ?: boolean;
  largeInset ?: boolean;
  largeInsetIos ?: boolean;
  largeInsetMd ?: boolean;
  xlargeInset ?: boolean;
  xlargeInsetIos ?: boolean;
  xlargeInsetMd ?: boolean;
  strong?: boolean;
  strongIos?: boolean;
  strongMd?: boolean;
  outline?: boolean;
  outlineIos?: boolean;
  outlineMd?: boolean;
  dividers?: boolean;
  dividersIos?: boolean;
  dividersMd?: boolean;
  mediaList ?: boolean;
  sortable ?: boolean;
  sortableTapHold ?: boolean;
  sortableEnabled ?: boolean;
  sortableMoveElements ?: boolean;
  sortableOpposite ?: boolean;
  accordionList ?: boolean;
  accordionOpposite ?: boolean;
  contactsList ?: boolean;
  simpleList ?: boolean;
  linksList ?: boolean;
  menuList ?: boolean;
  noChevron ?: boolean;
  chevronCenter ?: boolean;
  tab ?: boolean;
  tabActive ?: boolean;
  form ?: boolean;
  formStoreData ?: boolean;
  virtualList ?: boolean;
  virtualListParams ?: Object;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onVirtualItemBeforeInsert ?: (vl?: VirtualList.VirtualList, itemEl?: HTMLElement, item?: any) => void;
  onVirtualBeforeClear ?: (vl?: VirtualList.VirtualList, fragment?: any) => void;
  onVirtualItemsBeforeInsert ?: (vl?: VirtualList.VirtualList, fragment?: any) => void;
  onVirtualItemsAfterInsert ?: (vl?: VirtualList.VirtualList, fragment?: any) => void;
  onSubmit ?: (event?: any) => void;
  onSortableEnable ?: (...args: any[]) => void;
  onSortableDisable ?: (...args: any[]) => void;
  onSortableSort ?: (sortData?: any) => void;
  onSortableMove ?: (itemEl?: any) => void;
  onTabShow ?: (el?: HTMLElement) => void;
  onTabHide ?: (el?: HTMLElement) => void;
}



declare class List extends SvelteComponent<
  ListProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof ListProps>,
  { submit: CustomEvent<void>; sortableEnable: CustomEvent<void>; sortableDisable: CustomEvent<void>; sortableSort: CustomEvent<void>; sortableMove: CustomEvent<void>; virtualItemBeforeInsert: CustomEvent<void>; virtualBeforeClear: CustomEvent<void>; virtualItemsBeforeInsert: CustomEvent<void>; virtualItemsAfterInsert: CustomEvent<void>; },
  {  'before-list' : {};  'list' : {};  'default' : {};  'after-list' : {}; }
> {}

export { ListProps };
export default List;
