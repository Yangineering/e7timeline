import { reactive, watch, html } from "@arrow-js/core";

export default function banners() {
  return html`
  <div>  
    <h2>Banners</h2>
    <iframe class="airtable-embed col-span-2 h-50" src="https://airtable.com/embed/shryxvWCTUs9vPzrh?backgroundColor=green&viewControls=on" frameborder="0" onmousewheel="" style="background: transparent; border: 1px solid #ccc;"></iframe>
  </div>
  `;
}
