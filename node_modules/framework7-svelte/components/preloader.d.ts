
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface PreloaderProps {
  size ?: number | string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class Preloader extends SvelteComponent<
  PreloaderProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof PreloaderProps>,
  {  },
  {  }
> {}

export { PreloaderProps };
export default Preloader;
