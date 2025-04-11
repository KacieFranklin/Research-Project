import { i as head, h as stringify, d as base } from './paths-SRtfFsQB.js';
import { a as attr } from './attributes-T7AaUrmn.js';

function _error($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>404-error</title>`;
  });
  $$payload.out += `<h1>Error: Page Not Found</h1> <a${attr("href", `${stringify(base)}/home`)}>Home</a><br>`;
}

export { _error as default };
//# sourceMappingURL=_error.svelte-DqN4gL0T.js.map
