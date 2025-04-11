const HYDRATION_START = "[";
const HYDRATION_END = "]";
const HYDRATION_ERROR = {};
function lifecycle_outside_component(name) {
  {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}
const ATTR_REGEX = /[&"<]/g;
function escape_html(value, is_attr) {
  const str = String(value ?? "");
  const pattern = ATTR_REGEX ;
  pattern.lastIndex = 0;
  let escaped = "";
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped + str.substring(last);
}
var current_component = null;
function setContext(key, context) {
  get_or_init_context_map().set(key, context);
  return context;
}
function get_or_init_context_map(name) {
  if (current_component === null) {
    lifecycle_outside_component();
  }
  return current_component.c ??= new Map(get_parent_context(current_component) || void 0);
}
function push(fn) {
  current_component = { p: current_component, c: null, d: null };
}
function pop() {
  var component = (
    /** @type {Component} */
    current_component
  );
  var ondestroy = component.d;
  if (ondestroy) {
    on_destroy.push(...ondestroy);
  }
  current_component = component.p;
}
function get_parent_context(component_context) {
  let parent = component_context.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}
const BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
const BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;
let on_destroy = [];
function props_id_generator() {
  let uid = 1;
  return () => "s" + uid++;
}
function render(component, options = {}) {
  const uid = props_id_generator();
  const payload = {
    out: "",
    css: /* @__PURE__ */ new Set(),
    head: { title: "", out: "", css: /* @__PURE__ */ new Set(), uid },
    uid
  };
  const prev_on_destroy = on_destroy;
  on_destroy = [];
  payload.out += BLOCK_OPEN;
  if (options.context) {
    push();
    current_component.c = options.context;
  }
  component(payload, options.props ?? {}, {}, {});
  if (options.context) {
    pop();
  }
  payload.out += BLOCK_CLOSE;
  for (const cleanup of on_destroy) cleanup();
  on_destroy = prev_on_destroy;
  let head2 = payload.head.out + payload.head.title;
  for (const { hash, code } of payload.css) {
    head2 += `<style id="${hash}">${code}</style>`;
  }
  return {
    head: head2,
    html: payload.out,
    body: payload.out
  };
}
function head(payload, fn) {
  const head_payload = payload.head;
  head_payload.out += BLOCK_OPEN;
  fn(head_payload);
  head_payload.out += BLOCK_CLOSE;
}
function stringify(value) {
  return typeof value === "string" ? value : value == null ? "" : value + "";
}

let base = "/Research-Project";
let assets = base;
const app_dir = "_app";
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}

export { HYDRATION_START as H, HYDRATION_ERROR as a, HYDRATION_END as b, pop as c, base as d, app_dir as e, assets as f, reset as g, stringify as h, head as i, escape_html as j, push as p, render as r, setContext as s };
//# sourceMappingURL=paths-SRtfFsQB.js.map
