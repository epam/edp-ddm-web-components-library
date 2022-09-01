# MDTU web components

Shared component library

## Development

### Testing

```
npm run test 
```

### Building 

```
npm run build
```

### Linting

```
npm run lint
```

### Storybook

To run a live-reload Storybook server on your local machine:

```
npm run storybook
```

To export your Storybook as static files:

```
npm run storybook:export
```

## Reminder

After creating a new component, please don't forget to update(import new component) the file `index.ts` in the root of the component folder and `rollup.config.js`.

## Using the local version of the library in the app

### Steps

1. run _`npm run build`_

2. run _`npm pack`_

   This command will create a file `mdtu-web-components-x.x.x.tgz`.

   If file `mdtu-web-components-x.x.x.tgz` already exists, remove it before running the command.

3. run _`npm i <path_to_the_mdtu-web-components_folder>/mdtu-web-components-x.x.x.tgz`_

## Usage

Usage of the component (after the library installed as a dependency into another project) will be:

```TSX
import React from "react";
import { Button } from "mdtu-web-components";

const App = () => (
<div className="root">
  <Button />
</div>
);

export default App;
```

### More optimized approach for usage

This approach will import only Button component:

```TSX
import React from "react";
import Button from "mdtu-web-components/dist/components/Button";

const App = () => (
  <div className="root">
    <Button />
  </div>
);

export default App;
```
