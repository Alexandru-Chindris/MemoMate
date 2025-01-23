
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

import { Panel } from 'framework7/types';


interface PanelProps {
  side ?: string;
  effect ?: string;
  cover ?: boolean;
  reveal ?: boolean;
  push ?: boolean;
  floating ?: boolean;
  left ?: boolean;
  right ?: boolean;
  opened ?: boolean;
  resizable ?: boolean;
  backdrop ?: boolean;
  backdropEl ?: string;
  visibleBreakpoint ?: number;
  collapsedBreakpoint ?: number;
  swipe ?: boolean;
  swipeNoFollow ?: boolean;
  swipeOnlyClose ?: boolean;
  swipeActiveArea ?: number;
  swipeThreshold ?: number;
  containerEl ?: string | object;
  closeByBackdropClick?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onPanelOpen ?: (event?: any) => void;
  onPanelOpened ?: (event?: any) => void;
  onPanelClose ?: (event?: any) => void;
  onPanelClosed ?: (event?: any) => void;
  onPanelBackdropClick ?: (event?: any) => void;
  onPanelSwipe ?: (event?: any) => void;
  onPanelSwipeOpen ?: (event?: any) => void;
  onPanelBreakpoint ?: (event?: any) => void;
  onPanelCollapsedBreakpoint ?: (event?: any) => void;
  onPanelResize ?: (...args: any[]) => void;
}



declare class Panel extends SvelteComponent<
  PanelProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof PanelProps>,
  { panelOpen: CustomEvent<void>; panelOpened: CustomEvent<void>; panelClose: CustomEvent<void>; panelClosed: CustomEvent<void>; panelBackdropClick: CustomEvent<void>; panelSwipe: CustomEvent<void>; panelSwipeOpen: CustomEvent<void>; panelBreakpoint: CustomEvent<void>; panelCollapsedBreakpoint: CustomEvent<void>; panelResize: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { PanelProps };
export default Panel;
