require('./glider.min.js');
import * as React from 'react';

export class GliderComponent extends React.Component<IGliderProps> {
  glider: HTMLDivElement | null;
  arrowPrev: HTMLButtonElement | null;
  arrowNext: HTMLButtonElement | null;
  dots: HTMLDivElement | null;
  setGliderRef: (element: HTMLDivElement) => void;
  setArrowPrevRef: (element: HTMLButtonElement) => void;
  setArrowNextRef: (element: HTMLButtonElement) => void;
  setDotsRef: (element: HTMLDivElement) => void;
  createGlider: () => void;

  constructor(props: IGliderProps) {
    super(props);

    this.glider = null;
    this.arrowNext = null;
    this.arrowNext = null;
    this.dots = null;

    this.setGliderRef = element => {
      this.glider = element;
    };

    this.setArrowPrevRef = element => {
      this.arrowPrev = element;
    };

    this.setArrowNextRef = element => {
      this.arrowNext = element;
    };

    this.setDotsRef = element => {
      this.dots = element;
    };

    this.createGlider = () => {
      if (this.glider) {
        new Glider(this.glider, {
          arrows: this.props.hasArrows
            ? this.props.arrows || {
                prev: this.arrowPrev,
                next: this.arrowNext,
              }
            : undefined,
          dots: this.props.hasDots ? this.props.dots || this.dots : undefined,
          ...this.props.settings,
        });
      }
    };
  }

  componentDidMount() {
    this.createGlider();

    const addGliderEventListener = (
      event: string,
      fn: (event: IGliderEvent) => void
    ) => {
      if (typeof fn === 'function' && this.glider) {
        this.glider.addEventListener(event, fn);
      }
    };

    addGliderEventListener('glider-loaded', this.props.gliderLoaded);
    addGliderEventListener('glider-refresh', this.props.gliderRefresh);
    addGliderEventListener('glider-animated', this.props.gliderAnimated);
    addGliderEventListener('glider-add', this.props.gliderAdd);
    addGliderEventListener('glider-remove', this.props.gliderRemove);
    addGliderEventListener('glider-destroy', this.props.gliderDestroy);
    addGliderEventListener(
      'glider-slide-visible',
      this.props.gliderSlideVisible
    );
    addGliderEventListener('glider-slide-hidden', this.props.gliderSlideHidden);
  }

  componentWillUnmount() {
    const removeGliderEventListener = (
      event: string,
      fn: (event: IGliderEvent) => void
    ) => {
      if (typeof fn === 'function' && this.glider) {
        this.glider.removeEventListener(event, fn);
      }
    };

    removeGliderEventListener('glider-loaded', this.props.gliderLoaded);
    removeGliderEventListener('glider-refresh', this.props.gliderRefresh);
    removeGliderEventListener('glider-animated', this.props.gliderAnimated);
    removeGliderEventListener('glider-add', this.props.gliderAdd);
    removeGliderEventListener('glider-remove', this.props.gliderRemove);
    removeGliderEventListener('glider-destroy', this.props.gliderDestroy);
    removeGliderEventListener(
      'glider-slide-visible',
      this.props.gliderSlideVisible
    );
    removeGliderEventListener(
      'glider-slide-hidden',
      this.props.gliderSlideHidden
    );
  }

  public render() {
    return (
      <div className="glider-contain">
        <div className="glider" ref={this.setGliderRef}>
          {this.props.children}
        </div>

        {this.props.hasArrows && !this.props.arrows && (
          <button
            role="button"
            aria-label="Previous"
            className="glider-prev"
            ref={this.setArrowPrevRef}
          >
            «
          </button>
        )}
        {this.props.hasArrows && !this.props.arrows && (
          <button
            role="button"
            aria-label="Next"
            className="glider-next"
            ref={this.setArrowNextRef}
          >
            »
          </button>
        )}
        {this.props.hasDots && !this.props.dots && (
          <div role="tablist" className="dots" ref={this.setDotsRef}></div>
        )}
      </div>
    );
  }
}

export default GliderComponent;
