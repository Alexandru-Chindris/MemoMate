
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface AreaChartProps {
  lineChart?: boolean;
  datasets?: {values: number[]; color?: string; label?: any}[];
  axis?: boolean;
  axisLabels?: any[];
  tooltip?: boolean;
  legend?: boolean;
  toggleDatasets?: boolean;
  width?: number;
  height?: number;
  maxAxisLabels?: number;
  formatAxisLabel?: (label: any) => string;
  formatLegendLabel?: (label: any) => string;
  formatTooltip?: (data: {index: number; total: number; datasets: {label: any; color: string; value: number}[]}) => string;
  formatTooltipAxisLabel?: (label: any) => string;
  formatTooltipTotal?: (total: number) => string;
  formatTooltipDataset?: (label: any, value: number, color: string) => string;
  onSelect ?: (index: number | null) => void;
}



declare class AreaChart extends SvelteComponent<
  AreaChartProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof AreaChartProps>,
  { select: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { AreaChartProps };
export default AreaChart;
