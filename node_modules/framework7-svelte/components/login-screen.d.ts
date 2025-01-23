
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

import { LoginScreen } from 'framework7/types';


interface LoginScreenProps {
  opened?: boolean;
  animate?: boolean;
  containerEl ?: string | object;
  onLoginScreenOpen ?: (instance: LoginScreen.LoginScreen) => void;
  onLoginScreenOpened ?: (instance: LoginScreen.LoginScreen) => void;
  onLoginScreenClose ?: (instance: LoginScreen.LoginScreen) => void;
  onLoginScreenClosed ?: (instance: LoginScreen.LoginScreen) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class LoginScreen extends SvelteComponent<
  LoginScreenProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof LoginScreenProps>,
  {  },
  {  'default' : {}; }
> {}

export { LoginScreenProps };
export default LoginScreen;
