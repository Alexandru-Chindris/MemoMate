
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface LoginScreenTitleProps {
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class LoginScreenTitle extends SvelteComponent<
  LoginScreenTitleProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof LoginScreenTitleProps>,
  {  },
  {  'default' : {}; }
> {}

export { LoginScreenTitleProps };
export default LoginScreenTitle;
