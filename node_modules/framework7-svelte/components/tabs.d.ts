
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

import { SwiperOptions } from 'swiper';


interface TabsProps {
  animated ?: boolean;
  swipeable ?: boolean;
  routable ?: boolean;
  swiperParams ?: SwiperOptions;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
}



declare class Tabs extends SvelteComponent<
  TabsProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof TabsProps>,
  {  },
  {  'default' : {}; }
> {}

export { TabsProps };
export default Tabs;
