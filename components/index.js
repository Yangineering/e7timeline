import { html } from "@arrow-js/core";
const appElement = document.getElementById("app");
const airtableEmbed = html `<iframe
  class="airtable-embed"
  src="https://airtable.com/embed/shryxvWCTUs9vPzrh?backgroundColor=green&viewControls=on"
  frameborder="0"
  onmousewheel=""
  width="100%"
  height="533"
  style="background: transparent; border: 1px solid #ccc;"
></iframe>`;
airtableEmbed(appElement);
