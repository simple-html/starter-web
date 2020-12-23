import { html } from "lit-html";
import { customElement } from "@simple-html/core";
import { gotoURL } from "@simple-html/router/src";
import { routerConfig } from "./routerConfig";
import { formState } from "src/state/settingsState";

@customElement("login-route")
export default class extends HTMLElement {
  private authToggelBtn() {
    const [, formSet] = formState.getObject();
    formSet({ loggedin: isAuthenticted() ? false : true });

    // lets go to our login area
    gotoURL(routerConfig.child.children.protected.href);
  }

  public render() {
    return html`
      <section>
        <h1>Auth component</h1>
        <button
          class="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click=${this.authToggelBtn}
        >
          ${isAuthenticted() ? "logout" : "login"}
        </button>
      </section>
    `;
  }
}

// some dummy funtions to simulate logout


export function isAuthenticted() {
  const form = formState.getObjectStateOnly();
  return form.loggedin;
}

export function setLogoutState() {
  const [, formSet] = formState.getObject();
  formSet({ loggedin: false });
  gotoURL(""); // goto home is a good place
}