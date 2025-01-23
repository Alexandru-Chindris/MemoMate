
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

import { Range } from 'framework7/types';


interface RangeProps {
  init ?: boolean;
  value ?: number | Array<any> | string;
  min ?: number | string;
  max ?: number | string;
  step ?: number | string;
  label ?: boolean;
  dual ?: boolean;
  vertical ?: boolean;
  verticalReversed ?: boolean;
  draggableBar ?: boolean;
  formatLabel ?: Function;
  scale ?: boolean;
  scaleSteps ?: number;
  scaleSubSteps ?: number;
  formatScaleLabel ?: Function;
  limitKnobPosition ?: boolean;
  name ?: string;
  input ?: boolean;
  inputId ?: string;
  disabled ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onRangeChange ?: (val?: any) => void;
  onRangeChanged ?: (val?: any) => void;
}



declare class Range extends SvelteComponent<
  RangeProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof RangeProps>,
  { rangeChange: CustomEvent<void>; rangeChanged: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { RangeProps };
export default Range;
