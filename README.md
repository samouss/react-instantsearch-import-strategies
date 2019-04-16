# React InstantSearch import strategies

## With root imports

- **Branch**: `with-root-imports`
- **Size:** 301Kb
- **Size (gzipped):** 86.7Kb

```js
import {
  createInstantSearch,
  connectRefinementList,
  connectSearchBox,
  connectHits,
} from 'react-instantsearch-core';
```

![Treemap for root imports](./assets/treemap-root-imports.jpg)

## With direct imports

- **Branch**: `with-direct-imports`
- **Size:** 273Kb (~9% less)
- **Size (gzipped):** 80.3Kb (~7% less)

```js
import createInstantSearch from 'react-instantsearch-core/dist/es/core/createInstantSearch';
import connectHits from 'react-instantsearch-core/dist/es/connectors/connectHits';
import connectSearchBox from 'react-instantsearch-core/dist/es/connectors/connectSearchBox';
import connectRefinementList from 'react-instantsearch-core/dist/es/connectors/connectRefinementList';
```

![Treemap for root imports](./assets/treemap-direct-imports.jpg)
