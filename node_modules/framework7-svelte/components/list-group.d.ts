
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface ListGroupProps {
  mediaList ?: boolean;
  sortable ?: boolean;
  sortableOpposite ?: boolean;
  sortableTapHold ?: boolean;
  sortableMoveElements ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class ListGroup extends SvelteComponent<
  ListGroupProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof ListGroupProps>,
  {  },
  {  'default' : {}; }
> {}

export { ListGroupProps };
export default ListGroup;
