import { customElement } from "@simple-html/core";
import { html } from "lit-html";
import "./form-element";
import "./current-state";

@customElement("app-root")
export default class extends HTMLElement {
  render() {
    return html`<!-- template -->
      <section>
        <form-element class="p-2 m-2 bg-gray-300 block"></form-element>
      </section>
      <section>
        <current-state class="p-2 m-2 bg-gray-300 block"></current-state>
      </section>`;
  }
}
