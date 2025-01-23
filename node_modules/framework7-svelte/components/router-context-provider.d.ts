
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface RouterContextProviderProps {
  
}



declare class RouterContextProvider extends SvelteComponent<
  RouterContextProviderProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof RouterContextProviderProps>,
  {  },
  {  'default' : {}; }
> {}

export { RouterContextProviderProps };
export default RouterContextProvider;
