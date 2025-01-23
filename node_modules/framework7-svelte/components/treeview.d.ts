
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface TreeviewProps {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class Treeview extends SvelteComponent<
  TreeviewProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof TreeviewProps>,
  {  },
  {  'default' : {}; }
> {}

export { TreeviewProps };
export default Treeview;
