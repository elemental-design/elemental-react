# Elemental React

Build UI components once, render to any platform using `react-primitives`. This library abstracts away common UI patterns for you.

Abstraction for app presentation to speed up cross-platform UI design and development with code using React/Sketch as a design function. This is an underlying cross-platform abstraction wrapper that allows you to build your own design language

> Based off [`styled-system`]() and [`styled-components`](). API is similar to [`rebass`](https://github.com/rebassjs/rebass), but using React Native style components.

This is an **alpha/preview** release. Please **test** comprehensively before using in **production**.

## Getting Started

```sh
npm install elemental-react
```

```jsx
import React from 'react';
import {
  Box, Text, Button,
} from 'elemental-react';

// ...
return (
  <Box mt={3} bg="dark-blue">
    <Text color="white">
      Hello World
    </Text>
  </Box>
);
```

## Related Reading

- https://daneden.me/2018/01/05/subatomic-design-systems/
- https://medium.com/styled-components/build-better-component-libraries-with-styled-system-4951653d54ee
- https://medium.com/@_alanbsmith/layered-components-6f18996073a8
- https://medium.com/@_alanbsmith/component-api-design-3ff378458511

## Design Properties

### Line
Themed colour (primary)
- Weight
- Color
- Texture
- Style


### Shape
Foundational element.
- Depth
  - Light, shadow and depth (illusion)

### Texture
Physical quality of a surface.

### Balance
Equal distribution of visual weight – spacing.
- Symmetry (each side is the same)
- Asymmetry – evenly distribute weight
- Rule of thirds – grid divided into thirds


### Color

**Properties**
- Hue
- Saturation
  - Monochromatic
- Value

**Analagous Colour Scheme**
