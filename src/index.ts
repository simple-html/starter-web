import "./index.css";

// only use hmr if development
if (process.env.NODE_ENV === "development") {
  require("./hmr");
  
}

// load out elements
import("./app-root").then(() => {
    if (document.body) {
      document.body.innerHTML = "<app-root></app-root>";
    }
  });