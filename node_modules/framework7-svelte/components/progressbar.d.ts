
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface ProgressbarProps {
  progress ?: number;
  infinite ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class Progressbar extends SvelteComponent<
  ProgressbarProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof ProgressbarProps>,
  {  },
  {  }
> {}

export { ProgressbarProps };
export default Progressbar;
