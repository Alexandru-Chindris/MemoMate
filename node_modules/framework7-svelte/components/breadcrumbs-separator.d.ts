
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface BreadcrumbsSeparatorProps {
  
}



declare class BreadcrumbsSeparator extends SvelteComponent<
  BreadcrumbsSeparatorProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof BreadcrumbsSeparatorProps>,
  {  },
  {  }
> {}

export { BreadcrumbsSeparatorProps };
export default BreadcrumbsSeparator;
