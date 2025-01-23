
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface PieChartProps {
  size?: number;
  tooltip?: boolean;
  datasets?: {value: number; color?: string; label?: string}[];
  formatTooltip?: (data: {index: number; value: number; label: string; color: string; percentage: number}) => void;
  onSelect ?: (index: number | null, item: {value: number; label: string; color: string}) => void;
}



declare class PieChart extends SvelteComponent<
  PieChartProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof PieChartProps>,
  { select: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { PieChartProps };
export default PieChart;
