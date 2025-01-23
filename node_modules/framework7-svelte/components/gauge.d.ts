
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface GaugeProps {
  type ?: string;
  value ?: number | string;
  size ?: number | string;
  bgColor ?: string;
  borderBgColor ?: string;
  borderColor ?: string;
  borderWidth ?: number | string;
  valueText ?: number | string;
  valueTextColor ?: string;
  valueFontSize ?: number | string;
  valueFontWeight ?: number | string;
  labelText ?: string;
  labelTextColor ?: string;
  labelFontSize ?: number | string;
  labelFontWeight ?: number | string;
}



declare class Gauge extends SvelteComponent<
  GaugeProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof GaugeProps>,
  {  },
  {  }
> {}

export { GaugeProps };
export default Gauge;
