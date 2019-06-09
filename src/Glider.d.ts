declare interface IGliderEvent extends Event {
  bubbles: boolean;
  detail: any;
}

declare interface IGliderBreakpoint {
  breakpoint: number;
  settings: IGliderOptions;
}

declare interface IGliderOptions {
  arrows?: {
    prev: HTMLButtonElement | string;
    next: HTMLButtonElement | string;
  };
  dots?: HTMLDivElement | string;
  slidesToShow?: number | string;
  slidesToScroll?: number | string;
  itemWidth?: number;
  exactWidth?: boolean;
  scrollLock?: boolean;
  scrollLockDelay?: number;
  resizeLock?: boolean;
  responsive?: IGliderBreakpoint[];
  rewind?: boolean;
  scrollPropagate?: boolean;
  draggable?: boolean;
  dragVelocity?: number;
  duration?: number;
  propagateEvent?: boolean;
  skipTrack?: boolean;
}

declare interface GliderStatic {
  ref: HTMLDivElement;
  options: IGliderOptions;
  new (ref: HTMLDivElement, options: IGliderOptions): void;
}

declare var Glider: GliderStatic;

declare interface IGliderProps {
  hasArrows?: boolean;
  arrows?: {
    prev: HTMLButtonElement | string;
    next: HTMLButtonElement | string;
  };
  hasDots?: boolean;
  dots?: HTMLDivElement | string;
  settings?: {
    slidesToShow?: number | string;
    slidesToScroll?: number | string;
    itemWidth?: number;
    exactWidth?: boolean;
    scrollLock?: boolean;
    scrollLockDelay?: number;
    resizeLock?: boolean;
    responsive?: IGliderBreakpoint[];
    rewind?: boolean;
    scrollPropagate?: boolean;
    draggable?: boolean;
    dragVelocity?: number;
    duration?: number;
    propagateEvent?: boolean;
    skipTrack?: boolean;
  };
  gliderLoaded?: (event: IGliderEvent) => void;
  gliderRefresh?: (event: IGliderEvent) => void;
  gliderAnimated?: (event: IGliderEvent) => void;
  gliderAdd?: (event: IGliderEvent) => void;
  gliderRemove?: (event: IGliderEvent) => void;
  gliderDestroy?: (event: IGliderEvent) => void;
  gliderSlideVisible?: (event: IGliderEvent) => void;
  gliderSlideHidden?: (event: IGliderEvent) => void;
}
