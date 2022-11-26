import { reactive, watch, html } from "@arrow-js/core";

export default function events() {
  return html`
  <div class="col-span-2 md:col-span-1 h-100">  
    <h2>Events</h2>
    <iframe class="airtable-embed w-full" src="https://airtable.com/embed/shrnhVMltxFsLEYWu?backgroundColor=green&layout=card" frameborder="0" onmousewheel="" style="background: transparent; border: 1px solid #ccc;"></iframe>
  </div>
  `;
}
