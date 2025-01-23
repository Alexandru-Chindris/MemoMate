
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface RoutableModalsProps {
  
}



declare class RoutableModals extends SvelteComponent<
  RoutableModalsProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof RoutableModalsProps>,
  { modalsRouterDidUpdate: CustomEvent<void>; },
  {  }
> {}

export { RoutableModalsProps };
export default RoutableModals;
