import { html } from "lit-html";
import { customElement } from "@simple-html/core";
import { formState } from "src/state/settingsState";

@customElement("home-route")
export default class extends HTMLElement {
  public render() {
    const form = formState.getObjectStateOnly();
    return html` <section><h1>home</h1></section>
      <form class="flex flex-col">
        <h1 class="m-2 text-2xl">Current State</h1>
        Login to edit (protected route)
        <label class="p-2 border-b border-gray-300">
          First Name: ${form.firstName || ""}
        </label>
        <label class="p-2 border-b border-gray-300">
          Last name: ${form.lastLame || ""}
        </label>
      </form>`;
  }
}
