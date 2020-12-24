import { html } from "lit-html";
import { customElement } from "@simple-html/core";
import { navs, routerConfig } from "./routes/routerConfig";
import {
  connectHashChanges,
  gotoURL,
} from "@simple-html/router";
import { isAuthenticted, setLogoutState } from "./routes/login";
import "./routes/routerConfig";
import { loadIfUnknownRoute } from "./routes/loadIfUnknownRoute";

@customElement("app-root")
export default class extends HTMLElement {
  connectedCallback() {
    connectHashChanges(this, this.render);
  }



  public render() {
    return html`
      <nav class="flex bg-indigo-500 p-6">
        ${navs("main").map((route: any) => {
          if (route.isNav) {
            return html`
              <span class="mr-6">
                <a class="text-green-200 hover:text-white hover:underline" href="${route.href}"
                  >${route.title}</a
                >
              </span>
            `;
          }
          return "";
        })}

        <!-- login/logout button -->
        <span style="margin-left: auto;" class="mr-6">
          <span
            class="text-green-200 hover:text-white"
            @click=${() => {
              if (isAuthenticted()) {
                setLogoutState();
              } else {
                gotoURL("#:path", { path: "login" });
              }
            }}
          >
            ${isAuthenticted() ? "Logout" : "Login"}
          </span>
        </span>
      </nav>

      <!--  route -->
      ${routerConfig.home.load()}
      <!--  route -->
      ${routerConfig.settings.load()}
      <!--  route -->
      ${routerConfig.login.load()}
      <!--  route -->
      ${routerConfig.child.load()}
      <!--  route -->
      ${loadIfUnknownRoute()}
    `;
  }
}
