
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

  import { Framework7Parameters } from 'framework7/types';


interface AppProps {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}

 interface AppProps extends Framework7Parameters {}

declare class App extends SvelteComponent<
  AppProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof AppProps>,
  {  },
  {  'default' : {}; }
> {}

export { AppProps };
export default App;
