
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface BreadcrumbsCollapsedProps {
  onClick ?: (event?: any) => void;
}



declare class BreadcrumbsCollapsed extends SvelteComponent<
  BreadcrumbsCollapsedProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof BreadcrumbsCollapsedProps>,
  { click: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { BreadcrumbsCollapsedProps };
export default BreadcrumbsCollapsed;
