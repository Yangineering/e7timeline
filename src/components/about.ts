import { reactive, watch, html } from "@arrow-js/core";

export default function about() {
  return html`
    <h2>About</h2>
    Contact:
    <a
      class="text-blue-500 hover:text-blue-800 hover:underline"
      href="mailto:e7timeline@endqwerty.com"
      >e7timeline@endqwerty.com</a
    >
    Upcoming features
    <ul>
      <li>submit patch/banner info</li>
    </ul>
  `;
}
