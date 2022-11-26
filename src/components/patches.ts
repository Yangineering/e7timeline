import { reactive, watch, html } from "@arrow-js/core";

export default function patches() {
  return html`
  <div class="col-span-1 2xl:col-span-2">  
    <h2>Patches</h2>
    <iframe class="airtable-embed w-full h-600" src="https://airtable.com/embed/shrM55W6lS1hCKsI0?backgroundColor=green&viewControls=on" frameborder="0" onmousewheel="" style="background: transparent; border: 1px solid #ccc;"></iframe>
  </div>
  `;
}
