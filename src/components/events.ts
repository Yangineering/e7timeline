import { reactive, watch, html } from "@arrow-js/core";

export default function events() {
  return html`
  <div class="col-span-2 2xl:col-span-1">  
    <h2>Events</h2>
    <iframe class="airtable-embed w-full h-full" src="https://airtable.com/embed/shrnhVMltxFsLEYWu?backgroundColor=green&layout=card" frameborder="0" onmousewheel="" style="background: transparent; border: 1px solid #ccc;"></iframe>
  </div>
  `;
}
