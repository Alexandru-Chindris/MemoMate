
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface BreadcrumbsItemProps {
  onClick ?: (event?: any) => void;
  active?: boolean;
}



declare class BreadcrumbsItem extends SvelteComponent<
  BreadcrumbsItemProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof BreadcrumbsItemProps>,
  {  },
  {  'default' : {}; }
> {}

export { BreadcrumbsItemProps };
export default BreadcrumbsItem;
