import { c as patchEsm, b as bootstrapLazy } from './stencilredux-9a8dbb28.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([], options);
  });
};

export { defineCustomElements };
