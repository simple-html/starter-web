import { customElement } from "@simple-html/core";
import { html } from "lit-html";
import { formState } from "../state/formState";

@customElement("form-element")
export default class extends HTMLElement {
  render() {
    const [form, setForm] = formState.getObject();
    return html`
      <form class="flex flex-col">
        <h1 class="m-2 text-2xl">Form element</h1>
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
