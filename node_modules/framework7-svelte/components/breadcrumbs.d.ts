
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface BreadcrumbsProps {
  
}



declare class Breadcrumbs extends SvelteComponent<
  BreadcrumbsProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof BreadcrumbsProps>,
  {  },
  {  'default' : {}; }
> {}

export { BreadcrumbsProps };
export default Breadcrumbs;
