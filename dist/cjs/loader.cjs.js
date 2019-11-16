'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stencilredux-fd5599b2.js');

const defineCustomElements = (win, options) => {
  return __chunk_1.patchEsm().then(() => {
    __chunk_1.bootstrapLazy([], options);
  });
};

exports.defineCustomElements = defineCustomElements;
