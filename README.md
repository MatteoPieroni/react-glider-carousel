# React Glider Carousel

This package exports a React Component that can be used to create carousels using **[Glider.js](https://nickpiscitelli.github.io/Glider.js/)** (version 1.6.6).

As the author himself puts it:

> A fast, light-weight, dependency free, responsive, accessible, extendable, native scrolling list with paging controls, methods and events. (< 2.8kb gzipped!)
> 
> Demos and full documentation available on Github Pages: https://nickpiscitelli.github.io/Glider.js/

## Setup

To use this package run `yarn add react-glider-carousel` or `npm install --save react-glider-carousel`.

If you want the default styles you also need to [download Glider.js stylesheet](https://nickpiscitelli.github.io/Glider.js/) and reference it in your HTML:
```html
<link rel="stylesheet" type="text/css" href="glider.css">
```

or JS:

```js
import './src/glider.css';
```

**Warning**
To be able to import the stylesheet in your JavaScript you might need an appropriate way (ie. specific loaders for Webpack).

## Usage
To use the component just import in your React files and use it to wrap your slides

```js
import GliderComponent from 'react-glider-carousel';

const MyComponent = () => {
  return (
    <GliderComponent>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
    </GliderComponent>
  )
}
```

## Options

### Component Options

You can use the component with the following props

```js
<GliderComponent
  hasArrows={boolean}
  hasDots={boolean}
  arrows={{
    prev: HTMLElement | string,
    next: HTMLElement | string
  }}
  dots={HTMLElement | string}

  // Glider options
  settings={{}(see below)}

  // eventListeners
  gliderLoaded={(event: IGliderEvent) => void}
  gliderRefresh={(event: IGliderEvent) => void}
  gliderAnimated={(event: IGliderEvent) => void}
  gliderAdd={(event: IGliderEvent) => void}
  gliderRemove={(event: IGliderEvent) => void}
  gliderDestroy={(event: IGliderEvent) => void}
  gliderSlideVisible={(event: IGliderEvent) => void}
  gliderSlideHidden={(event: IGliderEvent) => void}
>
  <HTMLElements or ReactComponents />
</GliderComponent>
```

### Glider Config

The component prop `settings` are a mirror of Glider options

```typescript
  {
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
```