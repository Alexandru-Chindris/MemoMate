
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface UseIconProps {
  
}



declare class UseIcon extends SvelteComponent<
  UseIconProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof UseIconProps>,
  {  },
  {  }
> {}

export { UseIconProps };
export default UseIcon;
