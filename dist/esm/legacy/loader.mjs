import { c as patchEsm, b as bootstrapLazy } from './stencilredux-9a8dbb28.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([], options);
    });
};
export { defineCustomElements };
