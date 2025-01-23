
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface ListIndexProps {
  init ?: boolean;
  listEl ?: string | object;
  indexes ?: string | Array<any>;
  scrollList ?: boolean;
  label ?: boolean;
  iosItemHeight ?: number;
  mdItemHeight ?: number;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onListIndexSelect ?: (itemContent?: any, itemIndex?: any) => void;
}



declare class ListIndex extends SvelteComponent<
  ListIndexProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof ListIndexProps>,
  { listIndexSelect: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { ListIndexProps };
export default ListIndex;
