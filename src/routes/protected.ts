import { html } from "lit-html";
import { customElement } from "@simple-html/core";
import { isAuthenticted } from "./login";
import { gotoURL } from "@simple-html/router/src";
import { formState } from "src/state/settingsState";

@customElement("protected-route")
export default class extends HTMLElement {
  connectedCallback() {
    if (!isAuthenticted()) {
      gotoURL("#login");
    }
  }

  public render() {
    const [form, setForm] = formState.getObject();
    return html`
      <section><h1>Welcome to the inner circle :-)</h1></section>

      <form class="flex flex-col">
        <h1 class="m-2 text-2xl">Form element</h1>
         Just type in something you want on home:
        <label class="p-2">
          First Name:
          <input
            class="border border-gray-300 p-2"
            .value=${form.firstName || ""}
            @input=${(e: any) => setForm({ firstName: e.target.value })}
          />
        </label>
        <label class="p-2">
          Last name:
          <input
            class="border border-gray-300 p-2"
            .value=${form.lastLame || ""}
            @input=${(e: any) => setForm({ lastLame: e.target.value })}
          />
        </label>
      </form>
    `;
  }
}
