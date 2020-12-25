import "./index.css";

// only use hmr if development
if (process.env.NODE_ENV === "development") {
  const { applyPolyfill } = require("custom-elements-hmr-polyfill");
  applyPolyfill();

  // if I want it to print current store
  window.dispatchEvent(new CustomEvent("SIMPLE_HTML_SAVE_STATE"));
}

// load out elements
import("./app-root").then(() => {
  if (document.body) {
    document.body.innerHTML = "<app-root></app-root>";
  }
});
