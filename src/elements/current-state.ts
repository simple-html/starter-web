import { customElement } from "@simple-html/core";
import { html } from "lit-html";
import { formState } from "../state/formState";

@customElement("current-state")
export default class extends HTMLElement {
  
  // connect to state for updates, will auto disconnect
  connectedCallback() {
    formState.connect(this, this.render);
  }

  render() {
    console.log('what')
    const form = formState.getObjectStateOnly();

    return html`
      <form class="flex flex-col">
        <h1 class="m-2 text-2xl">Current State</h1>
        <label class="p-2"> First Name: ${form.firstName || ""} </label>
        <label class="p-2"> Last name: ${form.lastLame || ""} </label>
      </form>
    `;
  }
}
