
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

import { Stepper } from 'framework7/types';


interface StepperProps {
  init ?: boolean;
  value ?: number;
  min ?: number;
  max ?: number;
  step ?: number;
  formatValue ?: Function;
  name ?: string;
  inputId ?: string;
  input ?: boolean;
  inputType ?: string;
  inputReadonly ?: boolean;
  autorepeat ?: boolean;
  autorepeatDynamic ?: boolean;
  wraps ?: boolean;
  manualInputMode ?: boolean;
  decimalPoint ?: number;
  buttonsEndInputMode ?: boolean;
  disabled ?: boolean;
  buttonsOnly ?: boolean;
  round ?: boolean;
  roundMd ?: boolean;
  roundIos ?: boolean;
  fill ?: boolean;
  fillMd ?: boolean;
  fillIos ?: boolean;
  large ?: boolean;
  largeMd ?: boolean;
  largeIos ?: boolean;
  small ?: boolean;
  smallMd ?: boolean;
  smallIos ?: boolean;
  raised ?: boolean;
  raisedMd ?: boolean;
  raisedIos ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onStepperChange ?: (newValue?: any) => void;
  onInput ?: (event?: any, stepper?: Stepper.Stepper) => void;
  onChange ?: (event?: any, stepper?: Stepper.Stepper) => void;
  onStepperMinusClick ?: (event?: any, stepper?: Stepper.Stepper) => void;
  onStepperPlusClick ?: (event?: any, stepper?: Stepper.Stepper) => void;
}



declare class Stepper extends SvelteComponent<
  StepperProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof StepperProps>,
  { input: CustomEvent<void>; change: CustomEvent<void>; stepperMinusClick: CustomEvent<void>; stepperPlusClick: CustomEvent<void>; stepperChange: CustomEvent<void>; },
  {  }
> {}

export { StepperProps };
export default Stepper;
