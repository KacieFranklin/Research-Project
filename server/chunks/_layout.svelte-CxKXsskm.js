import { h as stringify, d as base } from './paths-SRtfFsQB.js';
import { a as attr, t as to_class } from './attributes-T7AaUrmn.js';
import { o as noop } from './exports-JTCBhp1J.js';

function Header($$payload) {
  $$payload.out += `<header class="svelte-pn7dfx"><div class="logo svelte-pn7dfx"><img src="Logo.png" alt="Website Logo" class="svelte-pn7dfx"> <h1>Perseplax</h1></div></header>`;
}

function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
if (is_legacy) {
  ({
    url: new URL("https://example.com")
  });
}
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};

/* empty css                                                     */
function Navigation($$payload) {
  let isOpen = false;
  $$payload.out += `<nav><button class="burger" aria-label="Toggle navigation">≡</button> <div class="hamburger-menu"><ul${attr("class", to_class("", null, { "open": isOpen }))}><span><a${attr("href", `${stringify(base)}/home`)}>Home</a></span> <span><a${attr("href", `${stringify(base)}/about`)}>About</a></span> <span><a${attr("href", `${stringify(base)}/contact`)}>Contact Us</a></span> <span><a${attr("href", `${stringify(base)}/legal-info`)}>Terms of Use</a></span> <span><a${attr("href", `${stringify(base)}/news`)}>Blog/News</a></span> <span><a${attr("href", `${stringify(base)}/products`)}>Products and Services</a></span> <span><a${attr("href", `${stringify(base)}/questions`)}>FAQ</a></span></ul></div></nav>`;
}
function Footer($$payload) {
  $$payload.out += `<footer class="svelte-1qpeff"><p>©2025 Perseplax. Creative Commons Attribution Share-Alike 4.0 International</p></footer>`;
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<a href="javascript:window.history.back()">Go Back</a> `;
  children($$payload);
  $$payload.out += `<!----> `;
  Header($$payload);
  $$payload.out += `<!----> <header>`;
  Navigation($$payload);
  $$payload.out += `<!----></header> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-CxKXsskm.js.map
