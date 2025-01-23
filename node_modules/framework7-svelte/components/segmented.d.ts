
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface SegmentedProps {
  raised ?: boolean;
  raisedIos ?: boolean;
  raisedMd ?: boolean;
  round ?: boolean;
  roundIos ?: boolean;
  roundMd ?: boolean;
  strong ?: boolean;
  strongIos ?: boolean;
  strongMd ?: boolean;
  tag ?: string;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class Segmented extends SvelteComponent<
  SegmentedProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof SegmentedProps>,
  {  },
  {  'default' : {}; }
> {}

export { SegmentedProps };
export default Segmented;
