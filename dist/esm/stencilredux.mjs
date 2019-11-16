import { a as patchBrowser, b as bootstrapLazy } from './stencilredux-9a8dbb28.js';

patchBrowser().then(resourcesUrl => {
  return bootstrapLazy([], { resourcesUrl });
});
