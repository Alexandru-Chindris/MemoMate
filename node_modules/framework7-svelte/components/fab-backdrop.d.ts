
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface FabBackdropProps {
  
}



declare class FabBackdrop extends SvelteComponent<
  FabBackdropProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof FabBackdropProps>,
  {  },
  {  }
> {}

export { FabBackdropProps };
export default FabBackdrop;
